'use client'
import { SelectOptions } from "@/types/valueLabel";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type ControlledSelectProps<T extends FieldValues> = {
    name: Path<T>;
    label: string;
    options: SelectOptions[];
    placeholder?: string;
    clearable?: boolean;
    disabled?: boolean;
    containerClassName?: string;
    className?: string;
}

export function ControlledSelect<T extends FieldValues>({
    name, 
    label,
    options,
    placeholder,
    clearable = false,
    disabled,
    containerClassName,
    className
}: ControlledSelectProps<T>) {
    const form = useFormContext<T>();

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn("w-full", containerClassName)}>
                    <FormLabel>{label}</FormLabel>

                    <FormControl>
                        <div className={cn("relative flex w-full", className)}>
                            <Select
                                disabled={disabled}
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                value={field.value}
                            >
                                <SelectTrigger className="no-focus rounded-1.5 min-h-12 border text-sm">
                                    <SelectValue placeholder={placeholder ?? `Select ${name}`} />
                                </SelectTrigger>

                                <SelectContent>
                                    {options.map((opt) => (
                                        <SelectItem key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {clearable && !!field.value && (
                                <Button
                                    variant="ghost"
                                    type="button"
                                    size="icon"
                                    className="text-foreground/40 hover:bg-accent/0 absolute top-1/2 right-8 size-4 -translate-y-1/2"
                                    onClick={() => field.onChange("")}
                                    aria-label={`Clear ${String(name)}`}
                                >
                                    <X />
                                </Button>
                            )}
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
