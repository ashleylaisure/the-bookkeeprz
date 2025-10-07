import React from "react";

import SignInForm from "@/components/forms/SignInForm";

export default function SignInPage() {
    return (
        <div className="container mx-auto max-w-screen-lg space-y-8 px-8 py-16">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold">Login</h1>
            </div>
            <SignInForm />
        </div>
    );
}
