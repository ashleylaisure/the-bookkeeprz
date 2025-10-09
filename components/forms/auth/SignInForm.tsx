"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { LoadingButton } from "@/components/loading-button";
import { PasswordInput } from "@/components/password-input";
import { Checkbox } from "@/components/ui/checkbox";
import ROUTES from "@/constants/routes";
import { signIn } from "@/lib/auth-client";
import {
    SignInSchema,
    signInDefaultValues,
    signInSchema,
} from "@/types/schema/signInSchema";

import { Button } from "../../ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Spinner } from "../../ui/spinner";

export function SignInForm() {
    const router = useRouter();

    const form = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema),
        defaultValues: signInDefaultValues,
    });

    const loading = form.formState.isSubmitting;

    async function onSubmit(data: SignInSchema) {
        const res = await signIn.email(
            { ...data },
            {
                onError: (error) => {
                    toast.error(error.error.message || "Failed to sign in.");
                },
                onSuccess: () => {
                    toast.success("Sign In successful! Good to have you back!");
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
                            <div className="flex items-center">
                                <FormLabel>Password</FormLabel>
                                <Link
                                    href={ROUTES.FORGOT_PASSWORD}
                                    className="text-primary-muted ml-auto inline-block text-sm hover:underline"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            <FormControl>
                                <PasswordInput
                                    autoComplete="current-password"
                                    placeholder="Password"
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
                    name="rememberMe"
                    render={({ field }) => (
                        <FormItem className="flex items-center gap-2">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormLabel>Remember Me</FormLabel>
                            {/* <FormMessage /> */}
                        </FormItem>
                    )}
                />

                <LoadingButton
                    type="submit"
                    loading={loading}
                    loadingText="Signing In..."
                    className="min-h-12 w-full cursor-pointer"
                >
                    Sign In
                </LoadingButton>
            </form>
        </Form>
    );
}
