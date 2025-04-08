"use client";

import React from "react";
import Modal from "./Modal";

import CustomButton from "../forms/CustomButton";
import useSignupModal from "@/hooks/useSignupModal";

const SignupModal = () => {
  const SignupModal = useSignupModal();

  const content = (
    <>
      <h2 className="mb-6 text-2xl">
        Welcome to Airbnb, Register Your Account
      </h2>
      <form action="" className="space-y-4">
        <input
          type="email"
          className="w-full h-[54px] border border-gray-300 px-4 rounded-xl"
          placeholder="Enter Your email"
        />
        <input
          type="password"
          className="w-full h-[54px] border border-gray-300 px-4 rounded-xl"
          placeholder="Set password"
        />
        <input
          type="password"
          className="w-full h-[54px] border border-gray-300 px-4 rounded-xl"
          placeholder="Confirm Password"
        />
        <div className="p-5 bg-red-400 text-white rounded-xl opacity-80"></div>
        <CustomButton label="Submit" onClick={() => console.log("Login")} />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={SignupModal.isOpen}
      close={SignupModal.close}
      content={content}
      label="Signup"
    />
  );
};

export default SignupModal;
