'use client'

import { signUpDefaultValues, signUpSchema, SignUpSchema } from "@/types/schema/signUpSchema"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Spinner } from "../ui/spinner"
import { signUp } from "@/lib/auth-client"
import ROUTES from "@/constants/routes"
import { toast } from "sonner"

import { useRouter } from "next/navigation"


export function SignUpForm() {
    const router = useRouter();

    const form = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema),
        defaultValues: signUpDefaultValues
    })

    const { isSubmitting } = form.formState

    async function onSubmit(data: SignUpSchema) {

        const res = await signUp.email(
            {...data, callbackURL: ROUTES.DASHBOARD},
            {
                onError: error => {
                    toast.error(error.error.message || "Failed to sign up.")
                },
                onSuccess: () => {
                    toast.success("Sign up successful! Please check your email to verify your account.")
                    router.push(ROUTES.DASHBOARD)
                }
            }
        )
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
                                    // placeholder="John Doe" 
                                    {...field} 
                                />
                            </FormControl>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
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
                                    // placeholder="shadcn" 
                                    {...field} 
                                />
                            </FormControl>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
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
                                <Input 
                                    type="password"
                                    // placeholder="shadcn" 
                                    {...field} 
                                />
                            </FormControl>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting
                        ? <div className="flex gap-4"><Spinner /> Signing Up...</div>
                        : "Sign Up"
                    }
                </Button>
            </form>
        </Form>
    )
}