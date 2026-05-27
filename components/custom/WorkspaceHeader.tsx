import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

function WorkspaceHeader() {
  return (
    <div className="w-full h-16 text-white flex items-center justify-between px-4">
      <div className="relative w-32 h-14">
        <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
      </div>

      <ul className="flex gap-5 text-xl">
        <li className="hover:text-blue-600 cursor-pointer">Workspace</li>
        <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
        <li className="hover:text-blue-600 cursor-pointer">Support</li>
      </ul>

      <UserButton />
    </div>
  );
}

export default WorkspaceHeader;
