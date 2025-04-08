import PropertyList from "@/components/properties/PropertyList";
import beach from "@/public/beach_1.jpg";

const MyPropertiesPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="text-2xl my-6 mb-6">My Properties</h1>
      <div>
        <PropertyList />
      </div>
    </main>
  );
};

export default MyPropertiesPage;
