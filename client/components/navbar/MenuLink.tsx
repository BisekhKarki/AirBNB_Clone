"use client";
import React from "react";

interface LinkProps {
  label: string | undefined;
  onClick: () => void;
}

const MenuLink: React.FC<LinkProps> = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-5 py-4 hover:bg-gray-100 transition cursor-pointer"
    >
      {label}
    </div>
  );
};

export default MenuLink;
