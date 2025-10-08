"use client";

import ROUTES from "@/constants/routes";
import { signIn } from "@/lib/auth-client";
import Image from "next/image";
import { Button } from "../../ui/button";
import { toast } from "sonner";


interface Props {
    formType: "SIGN_IN" | "SIGN_UP";
}

const SocialAuthForm = ({formType}: Props) => {

    const handleSignIn = async (provider: "google" | "github") => {
        try {
            await signIn.social({
                provider: provider,
                callbackURL: ROUTES.DASHBOARD
            })
        } catch (error) {
            console.log("Error during sign-in:", error);
            // Handle error (e.g., show notification to user)
            toast.error("Sign in failed", {
                description:
                    error instanceof Error
                        ? error.message
                        : "An error occured while signing in",
            });
        }
    };

    return (
        <>
            {/* Social Auth Buttons */}
            <div className="flex flex-wrap gap-2.5">
                {/* <Button
                    variant={"muted"}
                    className="w-full min-h-12 cursor-pointer"
                    onClick={() => handleSignIn("google")}
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
                </Button> */}

                <Button
                    variant={"muted"}
                    className="w-full min-h-12 cursor-pointer"
                    onClick={() => handleSignIn("google")}
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