"use client";

import React, { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiService from "../services/apiService";

export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
};

const PropertyList = () => {
  const [properties, setProperties] = useState<Array<PropertyType> | []>([]);

  const getProperties = async () => {
    const url = "/api/properties/";
    const tmpProperties = await apiService.get(url);
    setProperties(tmpProperties);
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {properties && properties.length > 0 ? (
          properties.map((property, index) => (
            <PropertyListItem key={index} property={property} />
          ))
        ) : (
          <p>No properties found</p>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
