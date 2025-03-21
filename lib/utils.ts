import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const contactSchema = z.object({
    name:z.string().min(2, "Name must be at least 2 characters long"),
    email:z.string().email(),
    subject:z.string().min(2, "Subject must be at least 2 characters long"),
    message:z.string().min(2, "Message must be at least 2 characters long")
})


