"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { DetailColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface DetailClientParams {
  data: DetailColumn[];
}

export const DetailClient: React.FC<DetailClientParams> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Детали (${data.length})`}
          description="Управляйте деталями продукции"
        />
        <Button
          onClick={() => router.push(`/admin/${params.storeId}/details/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Добавить
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Separator />
      <Heading title="API" description="API list row" />
      <ApiList entityName="colors" entityIdName="colorId" />
    </>
  );
};
