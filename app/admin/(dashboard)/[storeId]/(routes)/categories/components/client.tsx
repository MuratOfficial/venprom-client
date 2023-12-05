"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { CategoryColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface CategoryClientParams {
  data: CategoryColumn[];
}

export const CategoryClient: React.FC<CategoryClientParams> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Подкатегории (${data.length})`}
          description="Управляйте подкатегориями вашего магазина"
        />
        <Button
          onClick={() => router.push(`/admin/${params.storeId}/categories/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Добавить
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Separator />
      <Heading title="API" description="API list row" />
      <ApiList entityName="categories" entityIdName="categoryId" />
    </>
  );
};
