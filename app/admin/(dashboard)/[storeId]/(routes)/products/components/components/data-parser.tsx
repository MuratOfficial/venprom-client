import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Plus, RefreshCcw, Trash } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Category, Product } from "@/types";

// components/DataParser.tsx

interface OncategoryFormProps {
  data: Product[] | [];
}

const DataParser: React.FC<OncategoryFormProps> = ({ data }) => {
  const router = useRouter();
  const onUpload = async (data: Product[]) => {
    try {
      await axios.post(`/api/${params.storeId}/products/upload`, data);

      toast.success("Категория обновлена");
      router.push(`/admin/${params.storeId}/products`);
      router.refresh();
    } catch (error) {
      toast.error("Что-то пошло не так...");
    }
  };

  const onDelete = async () => {
    try {
      await axios.delete(`/api/${params.storeId}/products/upload`);

      toast.success("Продукт удалена");
    } catch (error) {
      toast.error("Что-то пошло не так");
    }
  };

  const onUpdate = async (data: Product[]) => {
    try {
      await axios.patch(`/api/${params.storeId}/products/upload`, data);

      toast.success("Обновлено успешно");
    } catch (error) {
      toast.error("Что-то пошло не так");
    }
  };

  const params = useParams();
  // const newData = JSON.stringify()

  const newData = JSON.stringify(data, null, 2);

  const formattedData: Product[] = data.map((el) => ({
    id: el.id,
    name: el.name,
    detailId: el?.detailId,
    images: el.images,
    categoryId: el.categoryId,

    characteristics1: el?.characteristics1 || "",
    characteristics2: el?.characteristics2 || "",
    characteristics3: el?.characteristics3 || "",
    characteristics4: el?.characteristics4 || "",
    characteristics5: el?.characteristics5 || "",
    characteristics6: el?.characteristics6 || "",
    characteristics7: el?.characteristics7 || "",
    characteristics8: el?.characteristics8 || "",
    characteristics9: el?.characteristics9 || "",
    characteristics10: el?.characteristics10 || "",
    characteristics11: el?.characteristics11 || "",
    characteristics12: el?.characteristics12 || "",
    characteristics13: el?.characteristics13 || "",
  }));

  const reformattedData = formattedData.slice(1);

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
                    <th className="border border-gray-400 p-2">ID</th>
                    <th className="border border-gray-400 p-2">Name</th>
                    <th className="border border-gray-400 p-2">CategoryId</th>
                    <th className="border border-gray-400 p-2">
                      Characteristics1
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reformattedData?.map((detail, ind) => (
                    <tr key={ind} className="bg-white">
                      <td className="border border-gray-400 p-2">{ind + 1}</td>

                      <td className="border border-gray-400 p-2">
                        {detail.id}
                      </td>
                      <td className="border border-gray-400 p-2">
                        {detail.name}
                      </td>
                      <td className="border border-gray-400 p-2">
                        {detail?.categoryId}
                      </td>
                      <td className="border border-gray-400 p-2">
                        {detail?.characteristics1}
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
