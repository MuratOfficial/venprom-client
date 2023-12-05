"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ProductColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface ProductClientParams {
  data: ProductColumn[];
}

export const ProductClient: React.FC<ProductClientParams> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Продукция (${data.length})`}
          description="Управляйте продукцией этой категории"
        />
        <Button
          onClick={() => router.push(`/admin/${params.storeId}/products/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Добавить
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Separator />
      <Heading title="API" description="API list row" />
      <ApiList entityName="products" entityIdName="productId" />
    </>
  );
};
