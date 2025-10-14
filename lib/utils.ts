import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function normalizeName(name: string) {
    return (
        name
            .trim()
            .replace(/\s+/g, " ")
            // .replace(/[^a-zA-Z\s'-]/g, "")
            .replace(/\b\w/g, (char) => char.toUpperCase())
    );
}

export const VALID_DOMAINS = () => {
    const domains = ["gmail.com", "yahoo.com", "outlook.com"];

    return domains;
};
