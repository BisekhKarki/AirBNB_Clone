"use client";

import Image from "next/image";
import React from "react";
import beach from "@/public/beach_1.jpg";
import profile from "@/public/profile_pic_1.jpg";
import ReservationSideBar from "@/components/properties/ReservationSideBar";

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          src={beach}
          className="object-cover w-full h-full"
          alt="Beach House"
        />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-3  py-6 pr-6">
          <h1 className="mb-4 text-4xl">Property Name</h1>
          <span className="mb-6 block text-lg text-gray-600 ">
            4 Guests - 2 bedrooms - 1 bathroom{" "}
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              src={profile}
              className="rounded-full"
              alt="profile pic"
              width={50}
              height={50}
            />
            <p>
              <strong>John Doe</strong> is your host
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ex iure vel ea autem sit dolores rerum, amet quaerat deserunt,
            aspernatur nulla, vero modi reprehenderit animi laboriosam quis
            recusandae sequi distinctio odit ab quae. Rem, modi. Ex quia minima
            aliquam inventore? Quibusdam culpa eius officiis dignissimos
            aspernatur, est voluptate alias.
          </p>
        </div>
        <ReservationSideBar />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
