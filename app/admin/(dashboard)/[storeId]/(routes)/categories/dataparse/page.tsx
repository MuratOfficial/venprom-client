"use client";
import { useState } from "react";
import FileUpload from "../components/components/file-upload";
import DataParser from "../components/components/data-parser";
import Papa from "papaparse";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import { Detail, Product } from "@/types";

const DataUpdate: NextPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  // const params = useParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const [uploadedData, setUploadedData] = useState<any[]>([]);

  const handleFileUpload = async (file: File) => {
    try {
      const parsedData = await parseFile(file);
      setUploadedData(parsedData);
    } catch (error) {
      console.error("Error parsing file:", error);
    }
  };

  const parseFile = async (file: File): Promise<any[]> => {
    const extension = file.name.split(".").pop()?.toLowerCase();

    if (extension === "csv") {
      return parseCSV(file);
    } else if (extension === "xlsx") {
      return parseXLSX(file);
    } else {
      throw new Error("Unsupported file format");
    }
  };

  const parseCSV = async (file: File): Promise<any[]> => {
    return new Promise<any[]>((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const content = event.target.result as string;
          Papa.parse(content, {
            header: false,
            dynamicTyping: true,
            skipEmptyLines: true,
            delimiter: ";",

            complete: (results) => {
              resolve(results.data);
            },
          });
        }
      };
      reader.readAsText(file, "windows-1251");
    });
  };

  const parseXLSX = async (file: File): Promise<any[]> => {
    return new Promise<any[]>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const content = event.target.result as ArrayBuffer;
          const workbook = new Uint8Array(content);
          Papa.parse(workbook as unknown as File, {
            header: true,
            complete: (results) => {
              // Assuming the first row is the header, so we skip it
              resolve(results.data.slice(1));
            },
            error: (error) => {
              reject(error);
            },
          });
        }
      };

      reader.readAsArrayBuffer(file);
    });
  };

  // const filterData = uploadedData?.slice(1, 5);

  let transformedData;

  transformedData = uploadedData.map((el) => ({
    id: el[0],
    name: el[1],
    heading1: el[2],
    description1: el[3],
    heading2: el[4],
    description2: el[5],
    heading3: el[6],
    description3: el[7],
  }));

  // const anotherData: Category[] = transformedData.map((item) => ({
  //   id: el[0],
  //     name:el[1],
  //     heading1:el[2],
  //     description1:el[3],
  //     heading2:el[4],
  //     description2:el[5],
  //     heading3:el[6],
  //     description3:el[7],
  // }));

  return (
    <div className="container mx-auto my-8">
      <div className="w-full flex flex-row justify-between">
        {" "}
        <h1 className="text-3xl font-bold mb-4">
          Добавьте файл и обновите категорию
        </h1>
      </div>

      <FileUpload onUpload={handleFileUpload} />

      {transformedData.length > 0 && (
        <>
          <DataParser data={transformedData} />
        </>
      )}
    </div>
  );
};

export default DataUpdate;
