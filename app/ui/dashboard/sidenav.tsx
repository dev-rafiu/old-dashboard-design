import Link from "next/link";
import NavLinks from "./nav-links";
// import AcmeLogo from "@/app/ui/acme-logo";
// import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-background-custom">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-secondary-custom p-4"
        href="/"
      >
        <div className="w-32 text-white md:w-40">{/* <AcmeLogo /> */}</div>
      </Link>
      <div className="hidden grow flex-row justify-between space-x-2 md:block md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
