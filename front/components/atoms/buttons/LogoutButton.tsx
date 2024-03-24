import { AuthContext } from "@/context/provider/AuthContext";
import { logout } from "@/context/services/authApi";
import Cookies from "js-cookie";
import { useContext } from "react";

export default function LogoutButton() {
  const { dispatchAuthStatus } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      const access = Cookies.get("access");
      const response = await logout(access);
      if (response) {
        Cookies.remove("access");
        Cookies.remove("refresh");
        dispatchAuthStatus(false);
      }
    } catch (error) {
      Cookies.remove("access");
      Cookies.remove("refresh");
      dispatchAuthStatus(false);
    }
  };
  return (
    <button
      className="my-3 px-10 rounded-2xl bg-red-200"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
