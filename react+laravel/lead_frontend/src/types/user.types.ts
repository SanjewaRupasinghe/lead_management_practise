export const UserRole = {
  SUPER_ADMIN: "super_admin",
  ADMIN: "admin",
} as const;

export const UserStatus = {
  ACTIVE: "active",
  INACTIVE: "inactive",
} as const;

export interface User {
  id: number;
  name: string;
  email: string;
  role: typeof UserRole;
  status: typeof UserStatus;
  created_at: string;
  updated_at: string;
}

// AuthStore interface
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (user: User | null, token: string) => void;
  clearAuth: () => void;
  updateUser: (user: User) => void;
}