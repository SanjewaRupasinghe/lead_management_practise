import { useStore } from "zustand";
import { useAuthStore } from "../stores/authStore";
import type { User } from "../types/user.types";

export const useAuth = () => {
  const authStore = useStore(useAuthStore);
  const { user, token, isAuthenticated, setAuth, clearAuth, updateUser } =
    authStore;

  const login = async (user: User, token: string) => {
    setAuth(user, token);
    localStorage.setItem("auth-storage", JSON.stringify({ user, token }));
  };

  const logout = async () => {
    clearAuth();
    localStorage.removeItem("auth-storage");
  };

  const refreshAuth = async (token: string) => {
    const stored = localStorage.getItem("auth-storage");
    if (stored) {
      const { user } = JSON.parse(stored);
      setAuth(user, token);
      localStorage.setItem("auth-storage", JSON.stringify({ user, token }));
    }
  };

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout,
    refreshAuth,
    updateUser,
  };
};
