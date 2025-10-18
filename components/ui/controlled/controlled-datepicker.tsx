import { FieldValues, Path, useFormContext } from "react-hook-form";
import { format } from "date-fns";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Button } from "../button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../calendar";

type ControlledDatePickerProps<T extends FieldValues> = {
    name: Path<T>;
    label?: string;
};

export function ControlledDatePicker<T extends FieldValues>({
    name,
    label,
}: ControlledDatePickerProps<T>) {
    const form = useFormContext<T>();

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col space-y-2">
                    <FormLabel className="text-sm font-medium text-foreground">{label}</FormLabel>
                    <Popover modal>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                    )}
                                    >
                                    <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                                    {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-auto p-0 rounded-xl border shadow-md">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                initialFocus
                                {...field}
                            />
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
