"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, useForm } from "react-hook-form"
import { z, ZodType } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUpDefaultValues, signUpSchema, SignUpSchema } from "@/types/schema/signUpSchema";
import { sign } from "crypto";
// import { signUpEmailAction } from "@/actions/sign-up-email.action";

interface AuthFormProps<T extends FieldValues> {
    formHeader?: string;
    formSubHeader?: string;
    schema: ZodType<T>;
    defaultValues: T;
    // onSubmit: (data: T) => Promise<{ success: boolean }>;
    // onSubmit: (data: T) => Promise<ActionResponse>;
    formType: "SIGN_IN" | "SIGN_UP";
}

export const AuthForm = <T extends FieldValues>({
    formHeader,
    formSubHeader,
    schema,
    defaultValues,
    // onSubmit,
    formType
}: AuthFormProps<T>) => {
    // const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    const form = useForm<SignUpSchema>({
        defaultValues: signUpDefaultValues,
        resolver: zodResolver(signUpSchema),
    });

    function onSubmit(values: SignUpSchema) {
        
    }

    return (
        <>
        <div className="flex-center flex-col gap-3">
            {/* <BrandLogo isOpen/> */}

            <h1 className="text-2xl font-semibold text-dark900_light100">
                {formHeader}
            </h1>

            <p className="paragraph-regular text-dark500_light400">{formSubHeader}</p>
        </div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">


                <Button type="submit">Submit</Button>
            </form>
        </Form>
        </>
    );
};