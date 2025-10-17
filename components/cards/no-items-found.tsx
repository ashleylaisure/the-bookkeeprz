import { CircleOff } from 'lucide-react';
import React from 'react'
import { Button } from '../ui/button';

interface NoItemsProps {
    heading: string;
    subheading: string;
    image?: string;
    buttonText?: string;
    onClick?: () => void;
}

const NoItemsFound = ({heading, subheading, image, onClick, buttonText}: NoItemsProps) => {

    return (
        <div className="mt-16 flex w-full flex-col items-center justify-center sm:mt-36">
            <>
            
            </>
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <CircleOff className="text-primary mb-2" />
                <h3 className="text-lg font-medium">{heading}</h3>
                <p className="text-foreground/60 mt-1 text-sm">{subheading}</p>
                <Button
                    variant="outline"
                    className="mt-4"
                    onClick={onClick}
                    >
                    {buttonText ? buttonText : "Add new Item"}
                </Button>
            </div>
        </div>
    )
}

export default NoItemsFound