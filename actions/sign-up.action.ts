'use server'

import { auth, ErrorCode } from "@/lib/auth";
import { SignUpForm, signUpSchema } from "@/types/schema/signUpSchema"
import { APIError } from "better-auth";

export async function signUpEmail(data: SignUpForm) {
    // ✅ validate on the server too
    const validatedData = signUpSchema.parse(data);
    if (!validatedData) {
        return { error: { message: "Invalid input data" } };
    }

    // Destructure the validated data
    const { email, password, name } = validatedData;

    // Call the signUpEmail API
    try {
        await auth.api.signUpEmail({
        body: {
            name,
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
            const errCode = err.body ? (err.body.code as ErrorCode) : "UNKNOWN_ERROR";
            // return {error: "Oops, something went wrong."};

            // Map specific error codes to user-friendly messages
            switch (errCode) {
                // case "USER_ALREADY_EXISTS":
                //     return { error: "Cannot use this email, already registered." };
                default:
                    return { error: err.message };
            }
        }

        // Handle generic errors
        return { error: "Internal Server Error" };
    }
}