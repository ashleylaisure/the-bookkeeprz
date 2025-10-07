import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import db from "@/lib/prisma";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
        // minPasswordLength: 6,
    },
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 60 * 60 * 24 * 7, // 7 days
        }
    },
    plugins: [nextCookies()],
});

