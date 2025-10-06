
import { auth } from '@/lib/auth'
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from 'react'

export default async function ProfilePage() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) redirect("/sign-in");

    return (
        <div className="px-8 py-16 container mx-auto max-w-screen-lg space-y-8">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold">Profile</h1>
            </div>
        </div>
    )
}