"use client";

import { IModel } from "@/types";
import FormAuth from "../layouts/FormAuth";
import { EInputsTypes } from "@/types/emuns";
import { CiLock, CiMail } from "react-icons/ci";
import useLogin from "@/hooks/useLogin";

const config: IModel.IInputGeneric[] = [
  {
    name: "email",
    id: "email",
    placeholder: "Email",
    configIcon: { icon: CiMail },
    type: EInputsTypes.email,
  },
  {
    name: "password",
    id: "password",
    placeholder: "Password",
    configIcon: { icon: CiLock },
    type: EInputsTypes.password,
  },
];

export default function FormLogin() {
  const { handleChange, handleSubmit } = useLogin();
  return (
    <FormAuth
      config={config}
      onChange={handleChange}
      onSubmit={handleSubmit}
      textSubmit="Login"
    />
  );
}
