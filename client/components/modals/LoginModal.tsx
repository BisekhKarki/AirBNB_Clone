"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import useLoginModal from "@/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import apiService from "../services/apiService";
import { handleLogin } from "@/lib/action";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [errors, setErrors] = useState<String[]>([]);
  const updateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitLogin = async () => {
    try {
      const response = await apiService.post("/api/auth/login/", formData);

      if (response.access) {
        console.log(response);
        loginModal.close();
        handleLogin(response.user.pk, response.access, response.refresh);

        router.push("/");
      } else {
        setErrors(response.non_field_errors);
      }
    } catch (error: unknown) {
      setErrors(error as []);
    }
  };

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Airbnb, please login</h2>
      <form action="" className="space-y-4">
        <input
          type="email"
          className="w-full h-[54px] border border-gray-300 px-4 rounded-xl"
          placeholder="Enter your email"
          name="email"
          onChange={updateChange}
        />
        <input
          type="password"
          className="w-full h-[54px] border border-gray-300 px-4 rounded-xl"
          placeholder="Enter your password"
          name="password"
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
        <CustomButton label="Submit" onClick={() => submitLogin()} />
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
