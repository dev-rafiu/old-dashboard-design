"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { BsCart4, BsFiles } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import { HiOutlineCake } from "react-icons/hi";
import { RiEBike2Line } from "react-icons/ri";
import { IoIosPeople, IoMdPeople } from "react-icons/io";
import { GiMedicines, GiMoneyStack } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { BiPlusMedical } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Courier", href: "/dashboard", icon: CiDeliveryTruck },
  {
    name: "Shop Online",
    href: "/dashboard/shop-online",
    icon: BsCart4,
  },
  {
    name: "Home Services",
    href: "/dashboard/home-services",
    icon: AiOutlineHome,
  },
  { name: "Food", href: "/dashboard/food", icon: IoFastFoodOutline },
  { name: "Cake", href: "/dashboard/cake", icon: HiOutlineCake },
  { name: "Pharmacy", href: "/dashboard/pharmacy", icon: GiMedicines },
  { name: "Rabito", href: "/dashboard/rabito", icon: BiPlusMedical },
  //   { name: "Betway", href: "/dashboard/betway", icon: "" },
  { name: "Report", href: "/dashboard/report", icon: TbReportSearch },
  { name: "File Manager", href: "/dashboard/file-manager", icon: BsFiles },
  { name: "Transactions", href: "/dashboard/transactions", icon: GiMoneyStack },
  { name: "Customers", href: "/dashboard/customers", icon: IoIosPeople },
  { name: "Riders", href: "/dashboard/riders", icon: RiEBike2Line },
  { name: "Employees", href: "/dashboard/employees", icon: IoMdPeople },
  { name: "Accounts", href: "/dashboard/accounts", icon: MdManageAccounts },
];

export default function NavLinks() {
  const pathName = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-transparent p-2 text-base font-medium md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "text-secondary": pathName == link.href,
              }
            )}
          >
            <LinkIcon className="w-6 text-lg" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
