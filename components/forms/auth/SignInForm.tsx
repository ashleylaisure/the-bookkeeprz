'use client'

import ROUTES from "@/constants/routes"
import { signIn } from "@/lib/auth-client"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Button } from "../../ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form"
import { Input } from "../../ui/input"
import { Spinner } from "../../ui/spinner"

import { signInDefaultValues, signInSchema, SignInSchema } from "@/types/schema/signInSchema"
import { useRouter } from "next/navigation"


export function SignInForm() {
    const router = useRouter();

    const form = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema),
        defaultValues: signInDefaultValues
    })

    const { isSubmitting } = form.formState

    async function onSubmit(data: SignInSchema) {

        const res = await signIn.email(
            {...data, callbackURL: ROUTES.DASHBOARD},
            {
                onError: error => {
                    toast.error(error.error.message || "Failed to sign in.")
                },
                onSuccess: () => {
                    toast.success("Sign In successful! Good to have you back!")
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
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input 
                                    type="email"
                                    placeholder={`Enter your ${field.name}`} 
                                    {...field} 
                                    className="paragraph-regular no-focus min-h-12 rounded-1.5 border"
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
                                    placeholder={`Enter your ${field.name}`} 
                                    {...field}
                                    className="paragraph-regular no-focus min-h-12 rounded-1.5 border"
                                />
                            </FormControl>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={isSubmitting} className="w-full min-h-12 cursor-pointer" >
                    {isSubmitting
                        ? <div className="flex gap-4"><Spinner /> Signing In...</div>
                        : "Sign In"
                    }
                </Button>
            </form>
        </Form>
    )
}