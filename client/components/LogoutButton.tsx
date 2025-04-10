"use client";

import { useRouter } from "next/navigation";
import React from "react";
import MenuLink from "./navbar/MenuLink";
import { resetAuthCookies } from "@/lib/action";

const LogoutButton: React.FC = () => {
  const router = useRouter();
  const submitLogout = async () => {
    resetAuthCookies();
    router.push("/");
  };

  return (
    <div>
      <MenuLink label="logout" onClick={() => submitLogout()} />
    </div>
  );
};

export default LogoutButton;
