"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: number;
  name: string;
  imageUrl: string;
  phoneNumber: string;
  region: string;
  amount: number;
  services: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "imageUrl",
    header: "",
    cell: (info) => (
      <Image
        src=""
        alt="..."
        width={36}
        height={36}
        className="rounded-full border"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Profile",
  },
  {
    accessorKey: "phoneNumber",
    header: "Number",
  },
  {
    accessorKey: "region",
    header: "Region",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "services",
    header: "Services",
  },
];
