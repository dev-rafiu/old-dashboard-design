import { FaHandsClapping, FaRegBell } from "react-icons/fa6";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Header() {
  return (
    <header className="bg-background-custom p-4 flex items-center justify-between gap-4 sticky top-0 z-10">
      {/* admin details */}
      <div className="lg:flex-1">
        <h2 className="capitalize font-bold flex items-center gap-3">
          <span>hello tony</span>

          <FaHandsClapping className="text-lg" />
        </h2>
        <p className="capitalize text-foreground-custom/40 text-sm">
          good morning
        </p>
      </div>

      <div className="flex items-center gap-4 flex-1">
        <Input className="max-w-80" />

        <span className="text-[#EA642B] text-2xl">
          <FaRegBell />
        </span>

        <div className="space-y-2 flex flex-col items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className=" capitalize text-foreground-custom/60">admin</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
