"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./cell-action";

export type DetailColumn = {
  id: string;
  name: string;
  value1: string;
  price: string;
  detailId: string;
  createdAt: string;
};

export const columns: ColumnDef<DetailColumn>[] = [
  {
    accessorKey: "name",
    header: "Название",
  },
  {
    accessorKey: "price",
    header: "Цена",
  },
  {
    accessorKey: "detailId",
    header: "Id детали",
  },

  {
    accessorKey: "value1",
    header: "Остаток",
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
