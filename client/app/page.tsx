// import Image from "next/image";

import Categories from "@/components/Categories";
import PropertyList from "@/components/properties/PropertyList";

export default function Home() {
  return (
    <div className="max-w-[1500px] mx-auto px-6">
      <Categories />
      <PropertyList />
    </div>
  );
}
