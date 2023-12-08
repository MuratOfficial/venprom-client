"use client";
import { useState } from "react";
import FileUpload from "../components/components/file-upload";
import DataParser from "../components/components/data-parser";
import Papa from "papaparse";
import { NextPage } from "next";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

const DataUpdate: NextPage = () => {
  const [uploadedData, setUploadedData] = useState<any[]>([]);

  const handleFileUpload = async (file: File) => {
    try {
      const parsedData = await parseFile(file);
      setUploadedData(parsedData);
    } catch (error) {
      console.error("Error parsing file:", error);
    }
  };

  // const handlePatchToDatabase = async () => {
  //   try {
  //     for (const data of uploadedData) {
  //       await prismadb.detail.create({
  //         data: {
  //           storeId: data.storeId,
  //           detailId: data.detailId,
  //           price: data.price,
  //           price1: data.price1,
  //           name: data.name,
  //           value1: data.value1,
  //           value2: data.value2,
  //         },
  //       });
  //     }

  //     console.log("Database updated successfully");
  //   } catch (error) {
  //     console.error("Error updating database:", error);
  //   }
  // };

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
            header: true,
            dynamicTyping: true,
            complete: (results) => {
              resolve(results.data);
            },
          });
        }
      };
      reader.readAsText(file);
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

  const params = useParams();

  return (
    <div className="container mx-auto my-8">
      <div className="w-full flex flex-row justify-between">
        {" "}
        <h1 className="text-3xl font-bold mb-4">Добавьте файл и обновите БД</h1>
      </div>

      <FileUpload onUpload={handleFileUpload} />
      {uploadedData.length > 0 && (
        <>
          <DataParser data={uploadedData} />
        </>
      )}
    </div>
  );
};

export default DataUpdate;
