"use client";
import React from "react";

interface Props {
  label: string | undefined;
  onClick: () => void;
  className?: string | undefined;
}

const CustomButton: React.FC<Props> = ({ label, onClick, className }) => {
  return (
    <div
      className={`${
        className ? className : "bg-red-400 hover:bg-red-500"
      } text-center py-4  text-white rounded-xl transition cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default CustomButton;
