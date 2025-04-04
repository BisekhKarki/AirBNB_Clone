"use client";

import Image from "next/image";
import React from "react";
import beach from "@/public/beach_1.jpg";

const PropertyListItem = () => {
  return (
    <div className="cursor-pointer">
      <div className=" relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src={beach}
          alt="beach house"
          sizes="(max-width:768px) 786px, (max-width:1200px): 768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">Property name</p>
      </div>
      <div className="mt-2">
        <p className="mt-2 text-sm ">
          <strong>$200</strong> /per night
        </p>
      </div>
    </div>
  );
};

export default PropertyListItem;
