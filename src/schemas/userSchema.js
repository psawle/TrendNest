import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const updateUserSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.email("Please enter a valid email"),
  password: z
    .union([z.string().min(6, "Password must be at least 6 characters"), z.literal("")])
    .optional(),
});
