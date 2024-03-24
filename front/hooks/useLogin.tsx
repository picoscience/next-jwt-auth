import { useContext, useState } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "@/context/provider/AuthContext";
import { login } from "@/context/services/authApi";

export default function useLogin() {
  const { dispatchAuthStatus } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login(loginData);
      //manejo errores response
      if (response.data?.access && response.data?.refresh) {
        dispatchAuthStatus(true);
        Cookies.set("access", response.data.access);
        Cookies.set("refresh", response.data.refresh);
      }
    } catch (error) {
      console.error("Error in POST request:", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return {
    loginData,
    handleChange,
    handleSubmit,
  };
}
