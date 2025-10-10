import React from "react";

import { getServerSession } from "@/lib/get-session";
import UserProfileForm from "@/components/forms/UserProfileForm";
import { redirect }  from "next/navigation";
import ROUTES from "@/constants/routes";

export default async function ProfilePage() {
    const session = await getServerSession();

    if (!session) redirect(ROUTES.HOME);

    const user = session?.user;

    return (
        <div className="container mx-auto max-w-screen-lg space-y-8 px-4 py-12">
            <div className="space-y-4">
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold">Profile</h1>
                    <p className="text-muted-foreground">
                        Update your account details, email, and password.
                    </p>
                </div>
            </div>

            <pre className="overflow-clip text-sm">
                {JSON.stringify(session, null, 2)}
            </pre>

            <div className="flex flex-col gap-6 lg:flex-row">
                <div className="flex-1">
                    <UserProfileForm user={user} />
                </div>
                {/* <div className="flex-1 space-y-6">
                    <EmailForm currentEmail={user.email} />
                    <PasswordForm />
                    <LogoutEverywhereButton />
                </div> */}
            </div>
        </div>
    );
}
