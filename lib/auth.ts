import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

import db from "@/lib/prisma";

export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
    },
    advanced: {
        database: {
            generateId: false,
        }
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    session: {
        expiresIn: 30 * 24 * 60 * 60, // 30 days server session expiry
        cookieCache: {
            enabled: true,
            maxAge: 60 * 60 * 24 * 7, // 7 days client cookie cache
        },
    },
    plugins: [nextCookies()],
});

export type ErrorCode = typeof auth.$ERROR_CODES | "UNKNOWN_ERROR";
export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;