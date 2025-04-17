"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import beach from "@/public/beach_1.jpg";
import profile from "@/public/profile_pic_1.jpg";
import ReservationSideBar from "@/components/properties/ReservationSideBar";
import apiService from "@/components/services/apiService";
import { useParams } from "next/navigation";
import { getUserId } from "@/lib/action";

export interface Property {
  id: string;
  title: string;
  description: string;
  price_per_night: number;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  image_url: string;
  landlord: {
    id: string;
    name: string | null;
    avatar: string | null;
  };
}

const PropertyDetailPage = () => {
  const [property, setProperty] = useState<Property | null>(null);
  const [userId, setUserId] = useState<string>("");
  const { id } = useParams();

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      const user = await getUserId();
      if (user) {
        setUserId(user as string);
      }

      try {
        const propertyData = await apiService.getProperty(
          `/api/properties/${id}`
        );
        setProperty(propertyData); // Update the state
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };

    fetchProperty();
  }, []);

  console.log(property);

  if (!property) return <div>Loading...</div>;

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        {property.image_url && (
          <Image
            src={property.image_url}
            className="object-cover w-full h-full"
            alt="Beach House"
            width={1200}
            height={800}
          />
        )}
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-3  py-6 pr-6">
          <h1 className="mb-4 text-4xl">{property.title}</h1>
          <span className="mb-6 block text-lg text-gray-600 ">
            {property.guests} Guests - {property.bedrooms} bedrooms -{" "}
            {property.bathrooms} bathroom
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            {property.landlord.avatar && (
              <Image
                src={property.landlord.avatar}
                className="rounded-full"
                alt="profile pic"
                width={50}
                height={50}
              />
            )}
            <p>
              <strong>{property.landlord.name}</strong> is your host
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg ">{property.description}</p>
        </div>
        <ReservationSideBar property={property} userId={userId} />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
