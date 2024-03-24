import { IModel } from "@/types";
import axios from "axios";

export function getUserRetrieve(access?: string) {
  return axios.get("http://127.0.0.1:8000/core/users/me/", {
    headers: {
      Authorization: `Bearer ${access}`,
    },
    withCredentials: true,
  });
}

export function verifyToken(access?: string) {
  return axios.post(
    "http://127.0.0.1:8000/core/jwt/verify/",
    { token: access },
    {
      withCredentials: true,
    }
  );
}

export function refreshToken(refresh?: string) {
  return axios.post(
    "http://127.0.0.1:8000/core/jwt/refresh/",
    { refresh: refresh },
    {
      headers: {
        Authorization: `Bearer ${refresh}`,
      },
      withCredentials: true,
    }
  );
}

export function logout(access?: string) {
  return axios.post(
    "http://127.0.0.1:8000/core/logout/",
    { access: access },
    {
      headers: {
        Authorization: `Bearer ${access}`,
      },
      withCredentials: true,
    }
  );
}

export function login(loginData: IModel.IUser) {
  return axios.post("http://127.0.0.1:8000/core/jwt/create/", loginData);
}

export function signin(signinData: IModel.IUserRegister) {
  return axios.post("http://127.0.0.1:8000/core/users/", signinData);
}
