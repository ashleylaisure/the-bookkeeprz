"use server";

import { APIError } from "better-auth";

import { ErrorCode, auth } from "@/lib/auth";
import { SignInSchema, signInSchema } from "@/types/schema/signInSchema";

export async function signInEmail(data: SignInSchema) {
    // ✅ validate on the server too
    const validatedData = signInSchema.parse(data);
    if (!validatedData) {
        return { error: { message: "Invalid input data" } };
    }

    // Destructure the validated data
    const { email, password } = validatedData;

    // Call the signInEmail API
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password,
            },
        });

        // If successful, return null error
        return { error: null };

        // Handle errors
    } catch (err) {
        // Handle specific API errors
        if (err instanceof APIError) {
            const errCode = err.body
                ? (err.body.code as ErrorCode)
                : "UNKNOWN_ERROR";
            // return {error: "Oops, something went wrong while logging in."};

            // Map specific error codes to user-friendly messages
            switch (errCode) {
                // case "EMAIL_NOT_VERIFIED":
                //     return { error: "That email is not verified." };
                default:
                    return { error: err.message };
            }
        }

        // Handle generic errors
        return { error: "Internal Server Error" };
    }
}
