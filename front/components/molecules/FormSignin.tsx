"use client";

import { CiLock, CiMail, CiUser } from "react-icons/ci";
import { EInputsTypes } from "@/types/emuns";
import { IModel } from "@/types";
import FormAuth from "../layouts/FormAuth";
import useSignin from "@/hooks/useSignin";

const config: IModel.IInputGeneric[] = [
  {
    name: "email",
    id: "email",
    placeholder: "Email",
    configIcon: { icon: CiMail },
    type: EInputsTypes.email,
  },
  {
    name: "user_name",
    id: "user_name",
    placeholder: "Usuario",
    configIcon: { icon: CiUser },
    type: EInputsTypes.text,
  },
  {
    name: "password",
    id: "password",
    placeholder: "Password",
    configIcon: { icon: CiLock },
    type: EInputsTypes.password,
  },
  {
    name: "re_password",
    id: "re_password",
    placeholder: "Password confirm",
    configIcon: { icon: CiLock },
    type: EInputsTypes.password,
  },
];

export default function FormSignin() {
  const { handleChange, handleSubmit } = useSignin();
  return (
    <FormAuth
      config={config}
      onChange={handleChange}
      onSubmit={handleSubmit}
      textSubmit="Signin"
    />
  );
}
