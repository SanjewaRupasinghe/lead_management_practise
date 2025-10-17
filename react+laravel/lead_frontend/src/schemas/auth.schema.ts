import { z } from "zod";
import { UserRole, UserStatus } from "../types/user.types";

export const userSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(3).max(50),
  email: z.string().email(),
  role: z.nativeEnum(UserRole),
  status: z.nativeEnum(UserStatus),
  created_at: z.date(),
  updated_at: z.date(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(50),
});

export const refreshTokenSchema = z.object({
  token: z.string().min(10).max(200),
});

export const meSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(3).max(50),
  email: z.string().email(),
  role: z.nativeEnum(UserRole),
  status: z.nativeEnum(UserStatus),
  created_at: z.date(),
  updated_at: z.date(),
});
