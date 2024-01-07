"use client";
import { useState } from "react";
import FileUpload from "../components/components/file-upload";
import DataParser from "../components/components/data-parser";
import Papa from "papaparse";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import { Detail } from "@/types";
import { Plus, Trash, Trash2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DataUpdate: NextPage = () => {
  const [keywords, setKeywords] = useState<string[]>([
    "ААБл-6 3х95 ож",
    "ААБл-10 3х95 ож",
    "ААБл-6 3х120 ож",
    "ААБл-10 3х120 ож",
    "ААБл-6 3х150 ож",
    "ААБл-10 3х150 ож",
    "ААБл-6 3х185 ож",
    "ААБл-10 3х185 ож",
    "ААБл-6 3х240 ож",
    "ААБл-10 3х240 ож",
    "ААБл-1 4х95 ож",
    "ААБл-1 4х120 ож",
    "ААБл-1 4х150 ож",
    "ААБл-1 4х185 ож",
    "ААБл-1 4х240 ож",
    "ААШв-10 3х95 ож",
    "ААШв-10 3х150 ож",
    "ААШв-10 3х185 ож",
    "ААШв-6 3х240 ож",
    "ААШв-10 3х240 ож",
    "ААШв-1 4х150 ож",
    "ААШв-1 4х185 ож",
    "ААШв-1 4х185 мн",
    "ААШв-1 4х240 ож",
    "ААШв-1 4х240 мн",
    "АВбШв 4х95 мс(N) -1",
    "АВБШв 4х120 мс(N) -1",
    "АВБШв 4х150 ос(N) -1",
    "АВБШв 4х150 мс(N) -1",
    "АВБШв 4х185 ос(N) -1",
    "АВБШв 4х185 мс(N) -1",
    "АВБШв 4х240 мс(N) -1",
    "АВБШв 5х95 мс(N,PE) -1",
    "АВБШв 5х120 мс(N,PE) -1",
    "АВБШв 5х150 мс(N,PE) -1",
    "АВВГнг(А)-LS 4х95 мс(N) -1",
    "АВВГнг(А)-LS 4х120 ос(N) -1",
    "АВВГнг(А)-LS 4х150 ос(N) -1",
    "АВВГнг(А)-LS 4х185 ос(N) -1",
    "АВВГнг(А)-LS 4х240 мс(N) -1",
    "АПвБШв 4х95 мс(N) -1",
    "АПВБШв 4х120 мс(N) -1",
    "АПВБШв 4х150 мс(N) -1",
    "АПВБШв 4х185 мс(N) -1",
    "АПВБШв 4х240 мс(N) -1",
    "АСБл-10 3х95 ож",
    "АСБл-10 3х120 ож",
    "АСБл-10 3х150 ож",
    "АСБл-10 3х240 ож",
    "ВБШвнг(А)-LS 4х25 ок(N) -0,66",
    "ВБШвнг(А)-LS 4х25 мк(N) -0,66",
    "ВБШвнг(А)-LS 4х35 ок(N) -0,66",
    "ВБШвнг(А)-LS 4х50 ок(N) -1",
    "ВБШвнг(А)-LS 4х70 мс(N) -1",
    "ВБШвнг(А)-LS 4х95 мс(N) -1",
    "ВБШвнг(А)-LS 4х120 мс(N) -1",
    "ВБШвнг(А)-LS 4х150 мс(N) -1",
    "ВБШвнг(А)-LS 4х185 мс(N) -1",
    "ВБШвнг(А)-LS 4х240 мс(N) -1",
    "ВБШвнг(А)-LS 5х25 ок(N,PE) -0,66",
    "ВБШвнг(А)-LS 5х35 ок(N,PE) -0,66",
    "ВБШвнг(А)-LS 5х50 ок(N,PE) -0,66",
    "ВБШвнг(А)-LS 5х70 мс(N,PE) -1",
    "ВБШвнг(А)-LS 5х95 мс(N,PE) -1",
    "ВБШвнг(А)-LS 5х120 мс(N,PE) -1",
    "ВБШвнг(А)-LS 5х150 мс(N,PE) -1",
    "ВБШвнг(А)-LS 5х185 мс(N,PE) -1",
    "ВВГнг(А)-LS 4х25 мк(N) -0,66",
    "ВВГнг(А)-LS 4х35 ок(N) -0,66",
    "ВВГнг(А)-LS 4х50 мк(N) -1",
    "ВВГнг(А)-LS 4х70 мс(N) -1",
    "ВВГнг(А)-LS 4х95 мс(N) -1",
    "ВВГнг(А)-LS 4х120 мс(N) -1",
    "ВВГнг(А)-LS 4х150 мс(N) -1",
    "ВВГнг(А)-LS 4х185 мс(N) -1",
    "ВВГнг(А)-LS 4х240 мс(N) -1",
    "ВВГнг(А)-LS 5х16 ок(N,PE) -0,66",
    "ВВГнг(А)-LS 5х35 ок(N, PE) -0,66",
    "ВВГнг(А)-LS 5х50 ок(N,PE) -0,66",
    "ВВГнг(А)-LS 5х70 мс(N,PE) -1",
    "ВВГнг(А)-LS 5х95 мс(N,PE) -1",
    "ВВГнг(А)-LS 5х120 мс(N,PE) -1",
    "ВВГнг(А)-LS 5х150 мс(N,PE) -1",
    "ВВГнг(А)-LS 5х185 мс(N,PE) -1",
    "ВВГнг(А)-LS 5х240 мс(N,PE) -1",
    "КГ-ХЛ 1х50 -380",
    "КГ-ХЛ 1х70 -660",
    "КГ-ХЛ 1х120 -660",
    "КГ-ХЛ 1х150 -660",
    "КГ-ХЛ 1х240 -660",
    "КГ-ХЛ 3х35+1х10 -380",
    "КГ-ХЛ 3х50+1х16 -660",
    "КГ-ХЛ 3х70+1х25 -660",
    "КГ-ХЛ 3х95+1х35 -660",
    "КГ-ХЛ 3х120+1х35 -660",
    "КГ-ХЛ 3х150+1х50 -660",
    "КГ-ХЛ 3х185+1х95 -660",
    "КГ-ХЛ 3х240+1х120 -660",
    "КГ-ХЛ 4х16 -380",
    "КГ-ХЛ 4х25 -380",
    "КГ-ХЛ 4х35 -380",
    "КГ-ХЛ 4х50 -380",
    "КГ-ХЛ 4х70 -660",
    "КГ-ХЛ 4х95 -660",
    "КГ-ХЛ 4х120 -660",
    "КГ-ХЛ 4х150 -660",
    "КГ-ХЛ 4х185 -660",
    "КГ-ХЛ 4х240 -660",
    "КГ-ХЛ 5х16 -380",
    "КГ-ХЛ 5х25 -380",
    "КГ-ХЛ 5х35 -380",
    "КГ-ХЛ 5х50 -380",
    "КГ-ХЛ 5х70 -660",
    "КГ-ХЛ 5х95 -660",
    "КГЭ-ХЛ 3х25+1х10 -6",
    "КГЭ-ХЛ 3х35+1х10 -6",
    "КГЭ-ХЛ 3х50+1х16 -6",
    "NTN",
    "SLZ",
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  // const params = useParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddKeyword = () => {
    if (inputValue.trim() !== "") {
      setKeywords((prevKeywords) => [...prevKeywords, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveKeyword = (index: number) => {
    setKeywords((prevKeywords) => [
      ...prevKeywords.slice(0, index),
      ...prevKeywords.slice(index + 1),
    ]);
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

  const filterData = uploadedData?.slice(1, 5);

  let transformedData;

  if (
    filterData.find((el) =>
      el[0]
        ?.replace(/\s/g, "")
        .toLowerCase()
        .includes("Подшипник".toLowerCase())
    )
  ) {
    transformedData = uploadedData
      .map((el) => ({
        name: el[0],
        price: el[1].replace(/[^\d,\.]/g, ""),
        value: el[2],
      }))
      .filter((item) => parseInt(item.price) > 5000);
  } else {
    transformedData = uploadedData.map((el) => ({
      name: el[0],
      price: el[4],
      value: el[2],
    }));
  }

  const anotherData: Detail[] = transformedData
    .map((item) => ({
      detailId: item.name,
      price: item.price,
      price1: "",
      name: item.name,
      value1: item.value,
      value2: "",
    }))
    .filter((el) => {
      let counter = 0;
      keywords.forEach((item) => {
        if (
          el?.name
            ?.replace(/\s/g, "")
            .toLowerCase()
            .includes(item.replace(/\s/g, "").toLowerCase())
        ) {
          counter++;
        }
      });
      if (counter > 0) {
        return true;
      } else {
        return false;
      }
    });

  return (
    <div className="container mx-auto my-8">
      <div className="w-full flex flex-row justify-between">
        {" "}
        <h1 className="text-3xl font-bold mb-4">
          Добавьте файл и обновите категорию
        </h1>
      </div>

      <FileUpload onUpload={handleFileUpload} />
      <div className="my-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Напишите для добавления ключа к фильтру"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 flex-grow"
          />
          <button
            onClick={handleAddKeyword}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <Plus />
          </button>
        </div>

        <div className="mt-0">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h2 className="text-xl font-semibold mb-2">
                  Список ключевых фраз
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                {keywords.map((keyword, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center bg-gray-200 rounded m-1 p-2"
                  >
                    <span className="mr-2">{keyword}</span>
                    <button
                      onClick={() => handleRemoveKeyword(index)}
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      <Trash2 />
                    </button>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {anotherData.length > 0 && (
        <>
          <DataParser data={anotherData} />
        </>
      )}
    </div>
  );
};

export default DataUpdate;
