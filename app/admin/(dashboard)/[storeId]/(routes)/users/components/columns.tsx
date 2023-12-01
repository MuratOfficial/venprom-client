"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./cell-action";

export type UserColumn = {
  id: string;
  email: string;
  surname: string;
  name: string;
  birthday: string;
  sex: string;
  phone: string;
  password: string;
  isActive: boolean;
  createdAt: string;
};

export const columns: ColumnDef<UserColumn>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "surname",
    header: "Surname",
  },
  {
    accessorKey: "birthday",
    header: "Birthday",
  },
  {
    accessorKey: "sex",
    header: "Sex",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },

  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
