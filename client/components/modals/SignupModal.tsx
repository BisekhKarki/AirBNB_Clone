"use client";

import React, { useState } from "react";
import Modal from "./Modal";

import CustomButton from "../forms/CustomButton";
import useSignupModal from "@/hooks/useSignupModal";
import { useRouter } from "next/navigation";
import apiService from "../services/apiService";
import { handleLogin } from "@/lib/action";

const SignupModal = () => {
  const SignupModal = useSignupModal();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password1: "",
    password2: "",
  });
  const [errors, setErrors] = useState<String[]>([]);

  const updateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitSignup = async () => {
    try {
      const response = await apiService.post("/api/auth/register/", formData);
      if (response.access) {
        handleLogin(response.user.ok, response.access, response.refresh);
        SignupModal.close();
        router.push("/");
      } else {
        const tmpError: string[] = Object.values(response).map((error: any) => {
          return error;
        });
        setErrors(tmpError);
      }
    } catch (error: unknown) {
      setErrors(error as []);
    }
  };

  const content = (
    <>
      <h2 className="mb-6 text-2xl">
        Welcome to Airbnb, Register Your Account
      </h2>
      <form action="" className="space-y-4" onSubmit={submitSignup}>
        <input
          type="email"
          className="w-full h-[54px] border border-gray-300 px-4 rounded-xl"
          placeholder="Enter Your email"
          name="email"
          onChange={updateChange}
        />
        <input
          type="password"
          className="w-full h-[54px] border border-gray-300 px-4 rounded-xl"
          placeholder="Set password"
          name="password1"
          onChange={updateChange}
        />
        <input
          type="password"
          className="w-full h-[54px] border border-gray-300 px-4 rounded-xl"
          placeholder="Confirm Password"
          name="password2"
          onChange={updateChange}
        />
        {errors &&
          errors.length > 0 &&
          errors.map((error, index) => {
            return (
              <div
                className="p-5 bg-red-400 text-white rounded-xl opacity-80"
                key={index}
              >
                {error}
              </div>
            );
          })}

        <CustomButton label="Submit" onClick={() => submitSignup()} />
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
