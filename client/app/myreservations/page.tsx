"use client";
import Image from "next/image";
import React from "react";
import beach from "@/public/beach_1.jpg";

const LandLordDteailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="text-2xl my-6 mb-6">My reservations</h1>
      <div className="space-y-4">
        <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1 ">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src={beach}
                className="hover:scale-110 object-cover h-full w-full cursor-pointer"
                alt="beach house"
              />
            </div>
          </div>
          <div className="space-y-2 md:col-span-3">
            <h2 className="mb-3 text-xl">Property Name</h2>
            <p className="mb-2 mt-6">
              <strong>Check in date: </strong>4/6/2025
            </p>
            <p className="mb-2 mt-6">
              <strong>Check out date: </strong>4/6/2025
            </p>
            <p className="mb-2 mt-6">
              <strong>Number of nights: </strong>2
            </p>
            <p className="mb-2 mt-6">
              <strong>Total Price: </strong>$200
            </p>
            <div className="cursor-pointer inline-block px-6 py-4 bg-red-400 text-white rounded-xl mt-6">
              Property
            </div>
          </div>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1 ">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src={beach}
                className="hover:scale-110 object-cover h-full w-full cursor-pointer"
                alt="beach house"
              />
            </div>
          </div>
          <div className="space-y-2 md:col-span-3">
            <h2 className="mb-3 text-xl">Property Name</h2>
            <p className="mb-2 mt-6">
              <strong>Check in date: </strong>4/6/2025
            </p>
            <p className="mb-2 mt-6">
              <strong>Check out date: </strong>4/6/2025
            </p>
            <p className="mb-2 mt-6">
              <strong>Number of nights: </strong>2
            </p>
            <p className="mb-2 mt-6">
              <strong>Total Price: </strong>$200
            </p>
            <div className="cursor-pointer inline-block px-6 py-4 bg-red-400 text-white rounded-xl mt-6">
              Property
            </div>
          </div>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1 ">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src={beach}
                className="hover:scale-110 object-cover h-full w-full cursor-pointer"
                alt="beach house"
              />
            </div>
          </div>
          <div className="space-y-2 md:col-span-3">
            <h2 className="mb-3 text-xl">Property Name</h2>
            <p className="mb-2 mt-6">
              <strong>Check in date: </strong>4/6/2025
            </p>
            <p className="mb-2 mt-6">
              <strong>Check out date: </strong>4/6/2025
            </p>
            <p className="mb-2 mt-6">
              <strong>Number of nights: </strong>2
            </p>
            <p className="mb-2 mt-6">
              <strong>Total Price: </strong>$200
            </p>
            <div className="cursor-pointer inline-block px-6 py-4 bg-red-400 text-white rounded-xl mt-6">
              Property
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandLordDteailPage;
