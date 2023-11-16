import { ReactNode } from "react";
import SideNav from "../ui/dashboard/sidenav";
import Header from "@/components/ui/header";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-48">
        <SideNav />
      </div>

      <div className="flex-grow md:overflow-y-auto space-y-4">
        <Header />

        <div className="p-4 pt-0">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
