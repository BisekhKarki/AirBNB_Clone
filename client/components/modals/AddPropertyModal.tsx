"use client";

import React from "react";
import useAddPropertyModal from "@/hooks/usePropertyModal";
import Modal from "../modals/Modal";
import CustomButton from "../forms/CustomButton";
import { useState } from "react";
import Categories from "../addProperty/Categories";
import SelectCountry, { SelectCountryType } from "../forms/SelectCountry";
import Image from "next/image";

import apiService from "../services/apiService";
import { useRouter } from "next/navigation";

const AddPropertyModal = () => {
  const addPropertyModal = useAddPropertyModal();
  const router = useRouter();

  // States

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErros] = useState<String[] | []>([]);
  const [dataCategory, setDataCategory] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataPrice, setDataPrice] = useState("");
  const [dataBedrooms, setDataBedrooms] = useState("");
  const [dataBathrooms, setDataBathrooms] = useState("");
  const [dataGuests, setDataGuests] = useState("");
  const [dataCountry, setDataCountry] = useState<SelectCountryType>();
  const [dataImage, setDataImage] = useState<File | null>(null);

  //    set datas
  const setCategory = (category: string) => {
    setDataCategory(category);
  };

  const setImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const tmpImage = e.target.files[0];
      setDataImage(tmpImage);
    }
  };

  //   submit

  const submitForm = async () => {
    console.log("submit Form");
    if (dataTitle && dataDescription && dataPrice && dataCountry && dataImage) {
      const formData = new FormData();
      formData.append("category", dataCategory);
      formData.append("title", dataTitle);
      formData.append("description", dataDescription);
      formData.append("price_per_night", dataPrice);
      formData.append("bedrooms", dataBedrooms);
      formData.append("bathrooms", dataBathrooms);
      formData.append("guests", dataGuests);
      formData.append("country", dataCountry.label);
      formData.append("country_code", dataCountry.value);
      formData.append("image", dataImage);
      const response = await apiService.postProperty(
        "/api/properties/create/",
        formData
      );
      if (response.success) {
        console.log("success");
        router.push("/");
        addPropertyModal.close();
      } else {
        const tmpErros: string[] = Object.values(response).map((error: any) => {
          return error;
        });
        setErros(tmpErros);
      }
    }
  };

  const content = (
    <>
      {currentStep === 1 ? (
        <>
          <h2 className="mb-6 text-2xl">Choose category </h2>
          <Categories dataCategory={dataCategory} setCategory={setCategory} />
          <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
        </>
      ) : currentStep === 2 ? (
        <>
          <h2 className="mb-6 text-2xl">Describe your place </h2>
          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2 ">
              <label htmlFor="">Title</label>
              <input
                title="Title"
                type="text"
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2 ">
              <label htmlFor="">Description</label>
              <textarea
                title="Description"
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
                className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
              ></textarea>
            </div>
          </div>
          <CustomButton
            label="Previous"
            className="mb-2 bg-black hover:bg-gray-800"
            onClick={() => setCurrentStep(1)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(3)} />
        </>
      ) : currentStep === 3 ? (
        <>
          <h2 className="mb-6 text-2xl">Details</h2>
          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2 ">
              <label>Price per night</label>
              <input
                title="Price"
                type="text"
                value={dataPrice}
                onChange={(e) => setDataPrice(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2 ">
              <label>Bedrooms</label>
              <input
                title="Bedrooms"
                type="text"
                value={dataBedrooms}
                onChange={(e) => setDataBedrooms(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2 ">
              <label>Bathrooms</label>
              <input
                title="Bathrooms"
                type="text"
                value={dataBathrooms}
                onChange={(e) => setDataBathrooms(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2 ">
              <label>Maximum number of Guests</label>
              <input
                title="Guests"
                type="text"
                value={dataGuests}
                onChange={(e) => setDataGuests(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>
          <CustomButton
            label="Previous"
            className="mb-2 bg-black hover:bg-gray-800"
            onClick={() => setCurrentStep(2)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(4)} />
        </>
      ) : currentStep === 4 ? (
        <>
          <h2 className="mb-6 text-2xl">Location</h2>
          <div className="pt-3 pb-6 space-y-4">
            <SelectCountry
              value={dataCountry}
              onChange={(value) => setDataCountry(value as SelectCountryType)}
            />
          </div>
          <CustomButton
            label="Previous"
            className="mb-2 bg-black hover:bg-gray-800"
            onClick={() => setCurrentStep(3)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(5)} />
        </>
      ) : (
        currentStep === 5 && (
          <>
            <h2 className="mb-6 text-2xl">Image</h2>
            <div className="pt-3 pb-6 space-y-4">
              <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
                <input
                  title="Image"
                  type="file"
                  accept="image/*"
                  onChange={setImage}
                />
              </div>
              {dataImage && (
                <div className="w-[200pcx] h-[150px] relative">
                  <Image
                    fill
                    alt="Uploaded Images"
                    src={URL.createObjectURL(dataImage)}
                    className="h-full object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
            {errors &&
              errors.map((error, index) => {
                return (
                  <div
                    className="p-5 mb-4 bg-red-400 text-white rounded-xl opacity-80"
                    key={index}
                  >
                    {error}
                  </div>
                );
              })}
            <CustomButton
              label="Previous"
              className="mb-2 bg-black hover:bg-gray-800"
              onClick={() => setCurrentStep(4)}
            />
            <CustomButton label="submit" onClick={() => submitForm()} />
          </>
        )
      )}
    </>
  );

  return (
    <>
      <Modal
        isOpen={addPropertyModal.isOpen}
        close={addPropertyModal.close}
        label={"Add Property"}
        content={content}
      />
    </>
  );
};

export default AddPropertyModal;
