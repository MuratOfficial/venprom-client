"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Download, Plus, Upload } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { DetailColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";
import ExcelJS from "exceljs";

interface DetailClientParams {
  data: DetailColumn[];
}

export const DetailClient: React.FC<DetailClientParams> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  const downloadAsExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Details");

    // Add headers
    const headers = Object.keys(data[0]);
    worksheet.addRow(headers);

    // Add data
    data.forEach((detail: any) => {
      const row = headers.map((header) => detail[header]);
      worksheet.addRow(row);
    });

    // Create buffer and download
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "details.xlsx";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Детали (${data.length})`}
          description="Управляйте деталями продукции"
        />
        <Button onClick={downloadAsExcel} variant="secondary">
          <Download className="mr-2 h-4 w-4" />
          Выгрузить xlsx., xls.
        </Button>
        <Button
          onClick={() =>
            router.push(`/admin/${params.storeId}/details/dataparse`)
          }
          variant="secondary"
        >
          <Upload className="mr-2 h-4 w-4" />
          Ввести данные с таблицами
        </Button>
        <Button
          onClick={() => router.push(`/admin/${params.storeId}/details/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Добавить
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="detailId" columns={columns} data={data} />
      <Separator />
      <Heading title="API" description="API list row" />
      <ApiList entityName="colors" entityIdName="colorId" />
    </>
  );
};
