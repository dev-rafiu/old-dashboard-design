"use client";

import { columns } from "@/components/ui/columns";
import { DataTable } from "@/components/ui/data-table";

// import {
//   Table,
//   TableRow,
//   TableCell,
//   TableHead,
//   TableHeaderCell,
//   TableBody,
//   BadgeDelta,
//   Title,
//   MultiSelect,
//   MultiSelectItem,
// } from "@tremor/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { User } from "lucide-react";

type User = {
  id: number;
  name: string;
  imageUrl: string;
  phoneNumber: string;
  region: string;
  amount: number;
  services: string;
};

const USERS: User[] = [
  {
    id: 1,
    name: "James Akrah",
    imageUrl: "",
    phoneNumber: "0293382380",
    region: "Greater Accra",
    amount: 20000,
    services: "Four",
  },
  {
    id: 2,
    name: "Angela Ntumy",
    imageUrl: "",
    phoneNumber: "0293382380",
    region: "Greater Accra",
    amount: 20000,
    services: "Four",
  },
  {
    id: 3,
    name: "Gybex Peprah",
    imageUrl: "",
    phoneNumber: "0293382380",
    region: "Ashanti Region",
    amount: 20000,
    services: "Three",
  },
  {
    id: 4,
    name: "Isiah Boagye",
    imageUrl: "",
    phoneNumber: "0293382380",
    region: "Central Region",
    amount: 20000,
    services: "Four",
  },
  {
    id: 5,
    name: "Gideon Jack",
    imageUrl: "",
    phoneNumber: "0293382380",
    region: "Volta Region",
    amount: 20000,
    services: "Three",
  },
];

function TotalUsersByRevenue() {
  const [selectedNames, setSelectedNames] = useState([]);

  // const isSalesPersonSelected = (user:User) =>
  //   selectedNames.includes(user.name) || selectedNames.length === 0;

  // return (
  //   <div className="bg-background-custom shadow-md rounded">
  //     <Card className="space-y-4">
  //       <header className="flex items-center justify-between">
  //         <Title className="capitalize text-foreground-custom/80">
  //           top users by revenue
  //         </Title>

  //         <MultiSelect
  //           onValueChange={setSelectedNames}
  //           placeholder="Select Salespeople..."
  //           className="max-w-xs"
  //         >
  //           {USERS.map((user) => (
  //             <MultiSelectItem key={user.id} value={user.name}>
  //               {user.name}
  //             </MultiSelectItem>
  //           ))}
  //         </MultiSelect>
  //       </header>

  //       <Table className="overflow-x-auto">
  //         <TableHead className="text-base">
  //           <TableRow>
  //             <TableHeaderCell>Profile</TableHeaderCell>
  //             <TableHeaderCell className="text-left text-foreground-custom/60">
  //               Number
  //             </TableHeaderCell>
  //             <TableHeaderCell className="text-left text-foreground-custom/60">
  //               Region
  //             </TableHeaderCell>
  //             <TableHeaderCell className="text-left text-foreground-custom/60">
  //               Amount
  //             </TableHeaderCell>
  //             <TableHeaderCell className="text-center lg:text-left text-foreground-custom/60">
  //               Services
  //             </TableHeaderCell>
  //           </TableRow>
  //         </TableHead>
  //         <TableBody>
  //           {USERS.map((user) => {
  //             const {
  //               id,
  //               amount,
  //               imageUrl,
  //               name,
  //               phoneNumber,
  //               region,
  //               services,
  //             } = user;
  //             return (
  //               <TableRow key={user.id}>
  //                 <TableCell className="text-left text-foreground-custom/80 text-sm">
  //                   {/* <Image src="" alt={user.name}/> */}
  //                   <span>{name}</span>
  //                 </TableCell>
  //                 <TableCell className="text-left text-foreground-custom/80 text-sm">
  //                   {phoneNumber}
  //                 </TableCell>
  //                 <TableCell className="text-left text-foreground-custom/80 text-sm">
  //                   {region}
  //                 </TableCell>
  //                 <TableCell className="text-left text-foreground-custom/80 text-sm">
  //                   {amount}
  //                 </TableCell>
  //                 <TableCell className="text-center lg:text-left text-foreground-custom/80 text-sm">
  //                   {services}
  //                 </TableCell>
  //               </TableRow>
  //             );
  //           })}
  //         </TableBody>
  //       </Table>
  //     </Card>
  //   </div>
  // );

  return (
    <div className="bg-background-custom shadow-md rounded">
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-base text-foreground-custom/80 font-normal">
            Total Users By Revenue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={USERS} />
        </CardContent>
      </Card>
    </div>
  );
}

export default TotalUsersByRevenue;
