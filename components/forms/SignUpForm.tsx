"use client";

// import { signUp } from "@/lib/auth-client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";
// import { signUpEmailAction } from "@/actions/sign-up-email.action";

export default function SignUpForm() {
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();

        const formData = new FormData(evt.target as HTMLFormElement)

        const name = String(formData.get("name"));
        if (!name) return toast.error("Name is required");

        const email = String(formData.get("email"));
        if (!email) return toast.error("Email is required");

        const password = String(formData.get("password"));
        if (!password) return toast.error("Password is required");

        await signUp.email(
            {
                name,
                email,
                password,
            },
            {
                onRequest: () => {},
                onResponse: () => {},
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                }, 
                onSuccess: () => {},
        }
    )
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-sm w-full space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password" />
            </div>

            <Button type="submit" className="w-full" disabled={isPending}>
                Register
            </Button>
        </form>
    );
};