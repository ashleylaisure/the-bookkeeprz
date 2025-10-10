'use server'
import { headers } from "next/headers";
import { cache } from "react";
import { auth } from "./auth";

export const getServerSession = cache(async () => {
    console.log("Fetching session in getServerSession");
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    return session;
});