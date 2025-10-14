import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { APIError, createAuthMiddleware } from "better-auth/api";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";

import db from "@/lib/prisma";

import { VALID_DOMAINS, normalizeName } from "./utils";

export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
    },
    hooks: {
        before: createAuthMiddleware(async (ctx) => {
            if (ctx.path === "/sign-up/email") {
                const email = String(ctx.body.email);
                const domain = email.split("@")[1].toLowerCase();

                if (!VALID_DOMAINS().includes(domain)) {
                    throw new APIError("BAD_REQUEST", {
                        message: "Invalid domain. Please use a valid email.",
                    });
                }

                const name = normalizeName(ctx.body.name);

                return {
                    context: { ...ctx.context, body: { ...ctx.body, name } },
                };
            }
        }),
    },
    advanced: {
        database: {
            generateId: false,
        },
    },
    socialProviders: {
        google: {
            prompt: "select_account",
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
    plugins: [
        nextCookies(),
        admin({
            defaultRole: "USER",
            adminRoles: ["ADMIN"],
        }),
    ],
});

export type ErrorCode = typeof auth.$ERROR_CODES | "UNKNOWN_ERROR";
export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
