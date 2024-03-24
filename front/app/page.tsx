"use client";

import LogoutButton from "@/components/atoms/buttons/LogoutButton";
import Login from "@/components/organisms/Login";
import Signin from "@/components/organisms/Signin";
import { AuthContext } from "@/context/provider/AuthContext";
import { useContext } from "react";
export default function Home() {
  const { isAuthenticated, isLoading } = useContext(AuthContext);
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-r from-[#35374B] to-[#344955] text-[#FFF]">
      {isAuthenticated && <LogoutButton />}
      <div className="flex flex-wrap gap-12">
        {isLoading ? (
          <>Loading</>
        ) : (
          <>
            {!isAuthenticated && (
              <>
                <Login />
                <Signin />
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
}
