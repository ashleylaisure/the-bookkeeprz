import { Metadata } from "next";

import AuthForm from "@/components/forms/auth/AuthForm";

export const metadata: Metadata = {
    title: "Sign in",
};

export default function SignInPage() {
    return (
        <>
            <AuthForm
                formHeader="Welcome back"
                formSubHeader="Sign in to continue to your account"
                formType="SIGN_IN"
            />
        </>
    );
}
