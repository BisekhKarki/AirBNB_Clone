"use client";
import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchFilters = () => {
  return (
    <div className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border border-gray-200 rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center  justify-between">
          <div className="h-[48px] lg:h-[64px] px-8 flex-col justify-center cursor-pointer rounded-full hover:bg-gray-100">
            <p className="text-sm font-semibold">Where</p>
            <p className="text-sm">Wanted location</p>
          </div>
          <div className="h-[48px] lg:h-[64px] px-8 flex-col justify-center cursor-pointer rounded-full hover:bg-gray-100">
            <p className="text-sm font-semibold">Check in</p>
            <p className="text-sm">Add dates</p>
          </div>
          <div className="h-[48px] lg:h-[64px] px-8 flex-col justify-center cursor-pointer rounded-full hover:bg-gray-100">
            <p className="text-sm font-semibold">Check out</p>
            <p className="text-sm">Add dates</p>
          </div>
          <div className="h-[48px] lg:h-[64px] px-8 flex-col justify-center cursor-pointer rounded-full hover:bg-gray-100">
            <p className="text-sm font-semibold">Who</p>
            <p className="text-sm">Add Guests</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="p-2 lg-p-4 bg-red-500 cursor-pointer hover:bg-red-600 transition  rounded-full text-white">
          <IoSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
