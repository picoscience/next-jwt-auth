import { IconType } from "react-icons";
import { EInputsTypes } from "../emuns";

export interface IUserAuth {
  email: string;
  user_name: string;
}

export interface ICreateUserResponse {
  success: boolean;
  user: IUserAuth;
}

export interface IAuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface ISocialAuth {
  provider: string;
  state: string;
  code: string;
}

export interface IUser {
  email: string;
  password: string;
}

export interface IUserRegister {
  email: string;
  user_name: string;
  password: string;
  re_password: string;
}

export interface IConfirm {
  uid: string;
  token: string;
}

export interface IResetPassword extends IConfirm {
  new_password: string;
  re_new_password: string;
}

export interface IInputGeneric {
  configIcon?: {
    icon: IconType;
    className?: string;
  };
  name: string;
  id: string;
  placeholder?: string;
  type?: EInputsTypes;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
