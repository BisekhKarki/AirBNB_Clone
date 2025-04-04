"use client";

import React from "react";
import PropertyListItem from "./PropertyListItem";

const PropertyList = () => {
  return (
    <div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <PropertyListItem />
        <PropertyListItem />
        <PropertyListItem />
      </div>
    </div>
  );
};

export default PropertyList;
