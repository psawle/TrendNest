import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  price: z
    .number({ error: "Price must be a number" })
    .positive("Price must be greater than 0"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(1, "Category is required"),
  image: z.url("Please enter a valid image URL"),
});
