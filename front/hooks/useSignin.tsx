import { signin } from "@/context/services/authApi";
import { useState } from "react";

export default function useSignin() {
  const [signinData, setSigninData] = useState({
    email: "",
    user_name: "",
    password: "",
    re_password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signin(signinData);
      //manejo errores response
      if (response.status === 201) {
        window.alert("Account created succesfully");
      } else {
        window.alert("There was an error creating the account");
      }
    } catch (error) {
      window.alert("There was an error creating the account");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSigninData({ ...signinData, [name]: value });
  };

  return {
    signinData,
    handleChange,
    handleSubmit,
  };
}
