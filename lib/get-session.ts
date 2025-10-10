'use server'
import { headers } from "next/headers";
import { cache } from "react";
import { auth } from "./auth";

import { redirect }  from "next/navigation";
import ROUTES from "@/constants/routes";

export const getServerSession = cache(async () => {
    console.log("Fetching session in getServerSession");
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) redirect(ROUTES.HOME);

    return session;
});