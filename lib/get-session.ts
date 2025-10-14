"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";

import ROUTES from "@/constants/routes";

import { auth } from "./auth";

export const getServerSession = cache(async () => {
    console.log("Fetching session in getServerSession");
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) redirect(ROUTES.HOME);

    return session;
});
