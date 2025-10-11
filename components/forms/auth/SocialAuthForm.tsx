"use client";

import Image from "next/image";

import { toast } from "sonner";

import ROUTES from "@/constants/routes";
import { signIn } from "@/lib/auth-client";

import { Button } from "../../ui/button";
import { useState } from "react";

interface Props {
    formType: "SIGN_IN" | "SIGN_UP";
}

const SocialAuthForm = ({ formType }: Props) => {
    const [loading, setLoading] = useState(false);
    
    async function handleSignIn(provider: "google" | "github") {
        await signIn.social({
            provider: provider,
            callbackURL: ROUTES.DASHBOARD,
            errorCallbackURL: ROUTES.ERROR,
            fetchOptions: {
                onRequest: () => {
                    setLoading(true);
                },
                onResponse: () => {
                    setLoading(false);
                },
                onError: (error) => {
                    toast.error(error.error.message || "Failed to sign in.");
                },
                onSuccess: () => {
                    toast.success("Sign In successful! Welcome to Bookkeepr!");
                },
            }
        });
    }

    return (
        <>
            {/* Social Auth Buttons */}
            <div className="flex w-full flex-col items-center justify-between gap-2">
                <Button
                    variant={"muted"}
                    className="min-h-12 w-full cursor-pointer"
                    onClick={() => handleSignIn("google")}
                    disabled={loading}
                >
                    <Image
                        src="/icons/google.svg"
                        alt="Google Logo"
                        width={20}
                        height={20}
                        className="mr-1 object-contain"
                    />
                    {formType === "SIGN_IN" ? (
                        <span>Sign in with Google</span>
                    ) : (
                        <span>Sign up with Google</span>
                    )}
                </Button>
            </div>
        </>
    );
};

export default SocialAuthForm;
