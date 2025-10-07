"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn, signUp } from "@/lib/auth-client";
import Link from "next/link";

export default function SignInForm() {
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();

        const formData = new FormData(evt.target as HTMLFormElement);

        const email = String(formData.get("email"));
        if (!email) return toast.error("Email is required");

        const password = String(formData.get("password"));
        if (!password) return toast.error("Password is required");

        await signIn.email(
            {
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
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-sm w-full space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center gap-2">
          <Label htmlFor="password">Password</Label>
          <Link
            tabIndex={-1}
            href="/auth/forgot-password"
            className="text-sm italic text-muted-foreground hover:text-foreground"
          >
            Forgot password?
          </Link>
        </div>

        <Input type="password" id="password" name="password" />
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        Login
      </Button>
    </form>
    );
}
