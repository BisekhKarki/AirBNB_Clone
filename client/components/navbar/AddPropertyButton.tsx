"use client";

import useLoginModal from "@/hooks/useLoginModal";
import useAddPropertyModal from "@/hooks/usePropertyModal";
import React from "react";

interface AddPropertyButtonProps {
  userId?: string | null;
}
const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
  const loginModal = useLoginModal();
  const addPropertyModal = useAddPropertyModal();

  const airbnbHome = () => {
    if (userId) {
      addPropertyModal.open();
    } else {
      loginModal.open();
    }
  };

  return (
    <div
      onClick={airbnbHome}
      className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200"
    >
      BnB Home
    </div>
  );
};

export default AddPropertyButton;
