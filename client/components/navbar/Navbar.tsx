// "use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";
import SearchFilters from "./SearchFilters";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddPropertyButton";
import { getUserId } from "@/lib/action";

const Navbar = async () => {
  const userId = await getUserId();

  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b border-gray-300 bg-white z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={180} height={38} />
          </Link>
          <div className="flex space-y-6">
            <SearchFilters />
          </div>
          <div className="flex items-center space-y-6">
            <AddPropertyButton />
            <UserNav userId={userId} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
