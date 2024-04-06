"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./cell-action";

export type ProductColumn = {
  id: string;
  name: string;
  isArchived: boolean;
  category: string;
  detailId: string;
  createdAt: string;
  picture1Url?: string;
  picture2Url?: string;
  categoryId?: string;
  characteristics1?: string;
  characteristics2?: string;
  characteristics3?: string;
  characteristics4?: string;
  characteristics5?: string;
  characteristics6?: string;
  characteristics7?: string;
  characteristics8?: string;
  characteristics9?: string;
  characteristics10?: string;
  characteristics11?: string;
  characteristics12?: string;
  characteristics13?: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Наименование",
  },

  {
    accessorKey: "category",
    header: "Подкатегория",
  },
  {
    accessorKey: "detailId",
    header: "Id деталей",
  },
  {
    accessorKey: "createdAt",
    header: "Дата",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
