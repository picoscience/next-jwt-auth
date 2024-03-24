"use client";

import Cookies from "js-cookie";
import {
  createContext,
  useState,
  Dispatch,
  useEffect,
  SetStateAction,
  ReactNode,
} from "react";
import { refreshToken, verifyToken } from "../services/authApi";

interface AuthContextProps {
  isAuthenticated: boolean;
  isLoading?: boolean;
  dispatchAuthStatus: Dispatch<SetStateAction<boolean>>;
  dispatchLoadStatus: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  isLoading: true,
  dispatchAuthStatus: () => {},
  dispatchLoadStatus: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatchAuthStatus: Dispatch<SetStateAction<boolean>> = (status) => {
    setIsAuthenticated(status);
  };
  const dispatchLoadStatus: Dispatch<SetStateAction<boolean>> = (status) => {
    setIsLoading(status);
  };

  const tryReAuth = async (token?: string, refresh?: string) => {
    try {
      const response = await verifyToken(token);
      if (response.status === 200) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      try {
        const response = await refreshToken(refresh);
        if (response.status === 200) {
          const access = response.data.access;
          Cookies.set("access", access);
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
        console.error("Error in POST request:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = Cookies.get("access");
    const refresh = Cookies.get("refresh");
    if (token && refresh) {
      tryReAuth(token, refresh);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        dispatchAuthStatus,
        dispatchLoadStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
