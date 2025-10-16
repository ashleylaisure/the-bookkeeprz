"use client";

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import { ComponentProps } from "react";

type ControlledTextareaProps<T extends FieldValues> = {
    name: Path<T>;
    label?: string;
    containerClassName?: string;
    placeholder?: string;
} & ComponentProps<"textarea">;

export function ControlledTextarea<T extends FieldValues>({
    name,
    label,
    containerClassName,
    className,
    placeholder,
    ...props
}: ControlledTextareaProps<T>) {
    const form = useFormContext<T>();

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn("w-full", containerClassName)}>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <Textarea
                            {...field}
                            {...props}
                            id={name}
                            className={cn(
                                "no-focus rounded-1.5 min-h-24 border text-sm",
                                className
                            )}
                            placeholder={placeholder ?? `Enter your ${field.name}`}
                        />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
