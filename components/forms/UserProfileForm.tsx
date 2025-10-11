'use client'

import { updateUser, useSession } from '@/lib/auth-client'
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Spinner } from '../ui/spinner';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { userProfileDefaultValues, userProfileSchema, UserProfileSchema } from '@/types/schema/userProfileSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { LoadingButton } from '../loading-button';

interface UserProfileProps {
    name?: string | null;
    image?: string | null;
}   

const UserProfileForm = ({name, image} : UserProfileProps) => {
    const router = useRouter();

    const form = useForm<UserProfileSchema>({
        resolver: zodResolver(userProfileSchema),
        defaultValues: {
            name: name ?? '',
            image: image ?? '',
        },
    });

    const loading = form.formState.isSubmitting;

    async function onSubmit(data: UserProfileSchema) {
        const payload = { ...data , image: data.image || null }; // Convert empty string to null for image field
        await updateUser(payload, {
            onRequest: () => {},
            onSuccess: () => {
                toast.success("Profile updated successfully!");
                router.refresh();
            },
            onError: (ctx) => {
                toast.error(ctx?.error?.message || "Failed to update profile.");
            }
        })


    }
    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle className="text-center text-lg md:text-xl">User Profile</CardTitle>
                <CardDescription className="text-center text-xs md:text-sm mb-4">
                    Update your account details, email, and password.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                                            value={field.value ?? ''}
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
                                            value={field.value ?? ''}
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
    )
}

export default UserProfileForm