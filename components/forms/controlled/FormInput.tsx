import { cn } from '@/lib/utils';
import React, { ComponentProps } from 'react'
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from '../../ui/label';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

type InputProps<T extends FieldValues> = {
    name: Path<T>;
    label?: string;
    containerClassName?: string;
} & ComponentProps<"input">;

const FormInput = <T extends FieldValues>({ className, type, name, label, containerClassName, ...props }: InputProps<T>) => {

    const { control } = useFormContext<T>();
    return (
        <div className={cn("w-full", containerClassName)}>
            <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is your public display name.
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />

            <Label className="mb-2" htmlFor={name}>
                {label}
            </Label>

            <Controller 
                name={name}
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <>
                        <Input
                            type={type}
                            id={name}
                            data-slot="input"
                            aria-invalid={!!error}
                            className={className}
                            {...field}
                            {...props}
                        />
                        {!!error && (
                        <p className="text-destructive text-sm">{error.message}</p>
                        )}
                    </>
                )}
            />

        </div>
    )
}

export default FormInput