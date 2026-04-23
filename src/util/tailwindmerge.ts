import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

/**
 
Merges Tailwind classes without style conflicts*/
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
