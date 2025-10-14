"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { updateUser, useSession } from "@/lib/auth-client";
import {
    UserProfileSchema,
    userProfileDefaultValues,
    userProfileSchema,
} from "@/types/schema/userProfileSchema";

import { LoadingButton } from "../loading-button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Spinner } from "../ui/spinner";

interface UserProfileProps {
    name?: string | null;
    image?: string | null;
}

const UserProfileForm = ({ name, image }: UserProfileProps) => {
    const router = useRouter();

    const form = useForm<UserProfileSchema>({
        resolver: zodResolver(userProfileSchema),
        defaultValues: {
            name: name ?? "",
            image: image ?? "",
        },
    });

    const loading = form.formState.isSubmitting;

    async function onSubmit(data: UserProfileSchema) {
        const payload = { ...data, image: data.image || null }; // Convert empty string to null for image field
        await updateUser(payload, {
            onRequest: () => {},
            onSuccess: () => {
                toast.success("Profile updated successfully!");
                router.refresh();
            },
            onError: (ctx) => {
                toast.error(ctx?.error?.message || "Failed to update profile.");
            },
        });
    }
    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle className="text-center text-lg md:text-xl">
                    User Profile
                </CardTitle>
                <CardDescription className="mb-4 text-center text-xs md:text-sm">
                    Update your account details, email, and password.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
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
                                            value={field.value ?? ""}
                                            className="no-focus rounded-1.5 min-h-12 border text-sm"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Image URL</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter image URL"
                                            {...field}
                                            value={field.value ?? ""}
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
                            loadingText="Updating..."
                            className="min-h-12 w-full cursor-pointer"
                        >
                            Update Profile
                        </LoadingButton>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default UserProfileForm;
