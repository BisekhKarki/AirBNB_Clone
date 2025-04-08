"use client";

import React from "react";
import Modal from "./Modal";
import useLoginModal from "@/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
  const loginModal = useLoginModal();

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Airbnb, please login</h2>
      <form action="" className="space-y-4">
        <input
          type="email"
          className="w-full h-[54px] border border-gray-300 px-4 rounded-xl"
          placeholder="Enter your email"
        />
        <input
          type="password"
          className="w-full h-[54px] border border-gray-300 px-4 rounded-xl"
          placeholder="Enter your password"
        />
        <div className="p-5 bg-red-400 text-white rounded-xl opacity-80"></div>
        <CustomButton label="Submit" onClick={() => console.log("Login")} />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      content={content}
      label="login"
    />
  );
};

export default LoginModal;
