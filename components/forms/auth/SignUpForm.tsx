"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { LoadingButton } from "@/components/loading-button";
import ROUTES from "@/constants/routes";
import { signUp } from "@/lib/auth-client";
import {
    type SignUpForm,
    signUpDefaultValues,
    signUpSchema,
} from "@/types/schema/signUpSchema";

import { PasswordInput } from "../../password-input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";

export function SignUpForm() {
    const router = useRouter();

    const form = useForm<SignUpForm>({
        resolver: zodResolver(signUpSchema),
        defaultValues: signUpDefaultValues,
    });

    const loading = form.formState.isSubmitting;

    async function onSubmit({ email, password, name }: SignUpForm) {
        await signUp.email(
            {
                email,
                password,
                name,
                callbackURL: ROUTES.EMAIL_VERIFY,
            },
            {
                onRequest: () => {},
                onResponse: () => {},
                onError: (error) => {
                    toast.error(error.error.message || "Failed to sign up.");
                },
                onSuccess: () => {
                    toast.success("Sign up successful!");
                    router.push(ROUTES.DASHBOARD);
                },
            }
        );
    }

    return (
        <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={`Enter your ${field.name}`}
                                    {...field}
                                    className="no-focus rounded-1.5 min-h-12 border text-sm"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder={`Enter your ${field.name}`}
                                    {...field}
                                    className="no-focus rounded-1.5 min-h-12 border text-sm"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <PasswordInput
                                    autoComplete="new-password"
                                    placeholder={`Enter your ${field.name}`}
                                    {...field}
                                    className="no-focus rounded-1.5 min-h-12 border text-sm"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="passwordConfirmation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <PasswordInput
                                    autoComplete="new-password"
                                    placeholder="Confirm your password"
                                    {...field}
                                    className="no-focus rounded-1.5 min-h-12 border text-sm"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <LoadingButton
                    type="submit"
                    loading={loading}
                    loadingText="Signing Up..."
                    className="min-h-12 w-full cursor-pointer"
                >
                    Sign Up
                </LoadingButton>
            </form>
        </Form>
    );
}
