import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

import ROUTES from "@/constants/routes";
import { auth } from "@/lib/auth";

export default async function ProfilePage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) redirect(ROUTES.HOME);

    return (
        <div className="container mx-auto max-w-screen-lg space-y-8 px-8 py-16">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold">
                    Welcome {session?.user?.name}
                </h1>
            </div>

            <pre className="overflow-clip text-sm">
                {JSON.stringify(session, null, 2)}
            </pre>
        </div>
    );
}
