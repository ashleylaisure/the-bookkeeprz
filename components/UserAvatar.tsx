'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function getInitials(name?: string | null) {
    if (!name) return "";
    // Normalize whitespace and split by spaces
    const names = name.trim().split(/\s+/);
    // If there are no names, return an empty string
    if (names.length === 0) return "";
    // If there's only one name, return the first letter capitalized
    if (names.length === 1) return names[0][0].toUpperCase();
    // If there are multiple names, return the first letter of the first and last names capitalized
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
}

interface UserAvatarProps {
    name?: string | null;
    image?: string | null;
    variant?: "sm" | "md" | "lg";
    shape?: "circle" | "rounded" | "square";
}

const variantMap = {
  sm: "h-8 w-8 text-xs",  // 32px
  md: "h-12 w-12 text-sm", // 48px
  lg: "h-16 w-16 text-lg", // 64px
  xl: "h-24 w-24 text-2xl" // 96px
};

export default function UserAvatar({ name, image, variant = "sm", shape = "rounded" }: UserAvatarProps) {
    const sizeClasses = variantMap[variant];
    const shapeClass = shape === "circle" ? "rounded-full" : shape === "square" ? "rounded-sm" : "rounded-lg";

    return (
        <Avatar className={`${sizeClasses} ${shapeClass}`}>
            <AvatarImage src={image ?? ""} alt={name || "User Avatar"} />
            <AvatarFallback className={`bg-primary text-muted ${shapeClass} flex items-center justify-center`}>
                {getInitials(name)}
            </AvatarFallback>
        </Avatar>
    );
}
