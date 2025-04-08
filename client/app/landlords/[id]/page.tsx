"use client";

import Image from "next/image";
import React from "react";
import profile from "@/public/profile_pic_1.jpg";
import ContactButton from "@/components/ContactButton";
import PropertyList from "@/components/properties/PropertyList";

const LandLordDteailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="col-span-1 mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
            <Image
              src={profile}
              width={200}
              height={200}
              alt="User Profile"
              className="rounded-full"
            />
            <h1 className="mt-6 text-2xl">Landlord Name</h1>
            <ContactButton />
          </div>
        </aside>
        <div className="col-span-3 pl-0 md:pl-6">
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-5">
          
          </div> */}
          <PropertyList />
        </div>
      </div>
    </main>
  );
};

export default LandLordDteailPage;
