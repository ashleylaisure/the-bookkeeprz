"use client";

import { ComponentProps } from "react";

import { FieldValues, Path, useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../form";

type InputProps<T extends FieldValues> = {
    name: Path<T>;
    label?: string;
    containerClassName?: string;
    placeholder?: string;
} & ComponentProps<"input">;

const ControlledInput = <T extends FieldValues>({
    className,
    type,
    name,
    label,
    containerClassName,
    placeholder,
    ...props
}: InputProps<T>) => {
    const form = useFormContext<T>();

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn("w-full", containerClassName)}>
                    {label && <FormLabel>{label}</FormLabel>}

                    <FormControl>
                        <Input
                            type={type}
                            id={name}
                            className={cn(
                                "no-focus rounded-1.5 min-h-12 border text-sm",
                                className
                            )}
                            placeholder={
                                placeholder ?? `Enter your ${field.name}`
                            }
                            {...field}
                            {...props}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export { ControlledInput };
