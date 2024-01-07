import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Detail } from "@/types";
import { Button } from "@/components/ui/button";
import { Plus, RefreshCcw, Trash } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// components/DataParser.tsx

interface DetailFormProps {
  data: Detail[] | [];
}

const DataParser: React.FC<DetailFormProps> = ({ data }) => {
  const router = useRouter();
  const onUpload = async (data: Detail[]) => {
    try {
      await axios.post(`/api/${params.storeId}/colors/upload`, data);

      toast.success("Категория обновлена");
      router.push(`/admin/${params.storeId}/details`);
      router.refresh();
    } catch (error) {
      toast.error("Что-то пошло не так...");
    }
  };

  const onDelete = async () => {
    try {
      await axios.delete(`/api/${params.storeId}/colors/upload`);

      toast.success("Детали удален");
    } catch (error) {
      toast.error("Что-то пошло не так");
    }
  };

  const onUpdate = async (data: Detail[]) => {
    try {
      await axios.patch(`/api/${params.storeId}/colors/upload`, data);

      toast.success("Обновлено успешно");
    } catch (error) {
      toast.error("Что-то пошло не так");
    }
  };

  const params = useParams();
  // const newData = JSON.stringify()

  const newData = JSON.stringify(data, null, 2);

  ///There is a filter of cabel types of uploaded data

  const cabelTypes = [];

  const formattedData: Detail[] = data.map((el) => ({
    detailId: el.detailId?.toString() || "",
    price: el.price?.toString() || "",
    price1: el.price1?.toString() || "",
    name: el.name?.toString() || "",
    value1: el.value1?.toString() || "",
    value2: el.value2?.toString() || "",
  }));

  const reformattedData = formattedData.slice(2, formattedData.length - 1);

  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2 className="text-xl font-semibold mb-2">Таблица данных</h2>
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-0">
              <p className="text-neutral-500 text-sm">
                Название полей должны оставаться на английском языке
              </p>
              <table className="w-full border-collapse border border-gray-400 overflow-x-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 p-2">#</th>
                    <th className="border border-gray-400 p-2">Store ID</th>
                    <th className="border border-gray-400 p-2">DetailId</th>
                    <th className="border border-gray-400 p-2">Price</th>
                    <th className="border border-gray-400 p-2">Name</th>
                    <th className="border border-gray-400 p-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {reformattedData?.map((detail, ind) => (
                    <tr key={ind} className="bg-white">
                      <td className="border border-gray-400 p-2">{ind + 1}</td>
                      <td className="border border-gray-400 p-2">
                        {params.storeId}
                      </td>
                      <td className="border border-gray-400 p-2">
                        {detail.detailId}
                      </td>
                      <td className="border border-gray-400 p-2">
                        {detail.price}
                      </td>
                      <td className="border border-gray-400 p-2">
                        {detail.name}
                      </td>
                      <td className="border border-gray-400 p-2">
                        {detail.value1}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <h2 className="text-xl font-semibold mb-2">
              Запарсированные данные
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <pre>{newData}</pre>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="w-full justify-between items-center flex flex-row">
        <button
          onClick={() => onUpload(reformattedData)}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
        >
          Обновить категорию
        </button>
        <Button
          variant="outline"
          className=" hover:opacity-90 text-lg"
          onClick={() => onUpdate(reformattedData)}
        >
          <RefreshCcw className="mr-4" /> Переписать
        </Button>{" "}
        <Button
          variant="destructive"
          className=" hover:opacity-90 text-lg"
          onClick={() => onDelete()}
        >
          <Trash className="mr-4" /> Очистить категорию
        </Button>{" "}
      </div>
    </div>
  );
};

export default DataParser;
