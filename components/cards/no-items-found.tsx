import { CircleOff, Plus } from 'lucide-react';
import React from 'react'
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Image from "next/image";

interface NoItemsProps {
    heading: string;
    subheading: string;
    image?: { light: string; dark: string; alt?: string };
    icon?: React.ElementType;
    buttonText?: string;
    onClick?: () => void;
    variant?: 'full' | 'medium' |'compact';
}

const NoItemsFound = ({heading, subheading, image, onClick, buttonText, variant = 'full', icon: Icon = CircleOff}: NoItemsProps) => {
    const baseStyles = "flex flex-col items-center justify-center text-center relative w-full"
    const containerClasses = {
        compact:
            "mt-4, sm:mt-4 py-4",
        medium:
            "mt-8, sm:mt-24 py-8",
        full:
            "mt-16, sm:mt-36 py-12",
    }
    const headingClasses = cn("font-semibold",
        variant === 'compact' ? "text-sm" :
        variant === 'medium' ? "text-base" : "text-lg"
    )

    const subheadingClasses = cn("text-foreground/60 mt-1",
        variant === 'compact' ? "hidden" :
        variant === 'medium' ? "text-sm max-w-[300px]" : "text-sm max-w-sm"
    )

    const iconClasses = cn("mb-3 text-primary",
        variant === 'compact' ? "w-6 h-6" :
        variant === 'medium' ? "w-8 h-8" : "w-10 h-10"
    )
    return (
        <div className={`${baseStyles} ${containerClasses[variant]}`}>
            {/* Background image */}
            {image && (
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <Image
                        src={image.light}
                        alt={image.alt || heading}
                        width={300}
                        height={200}
                        className="block object-contain dark:hidden opacity-20"
                    />
                    <Image
                        src={image.dark}
                        alt={image.alt || heading}
                        width={300}
                        height={200}
                        className="hidden object-contain dark:block opacity-20"
                    />
                </div>
            )}

            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                {!image && <Icon className={iconClasses} />}

                <h3 className={headingClasses}>{heading}</h3>
                <p className={subheadingClasses}>{subheading}</p>
                {onClick && (
                    <Button
                        variant="outline"
                        size={variant === 'compact' ? 'sm' : 'default'}
                        className="mt-4"
                        onClick={onClick}
                    >
                        {variant === 'compact' ? <Plus className="text-primary" /> : buttonText || "Add new Item"}
                    </Button>
                )}
            </div>
        </div>
    )
}

export default NoItemsFound