"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./cell-action";

export type CategoryColumn = {
  id: string;
  name: string;
  createdAt: string;
  heading1?: string;
  description1?: string;
  heading2?: string;
  description2?: string;
  heading3?: string;
  description3?: string;
};

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "name",
    header: "Название",
  },
  {
    accessorKey: "createdAt",
    header: "Дата создания",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
