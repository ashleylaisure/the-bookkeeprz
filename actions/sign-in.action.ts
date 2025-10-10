'use server'

import { auth } from "@/lib/auth";
import { signInSchema, SignInSchema } from "@/types/schema/signInSchema";

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
        if (err instanceof Error) {
            // const errCode = err.body ? (err.body.code as ErrorCode) : "UNKNOWN";
            return {error: "Oops, something went wrong while logging in."};

            // Map specific error codes to user-friendly messages
            // switch (errCode) {
            //     case "USER_ALREADY_EXISTS":
            //         return { error: "That email is already registered." };
            //     case "INVALID_PASSWORD":
            //         return { error: "Password does not meet requirements." };
            //     default:
            //         return { error: err.message };
            // }
        }

        // Handle generic errors
        return { error: "Internal Server Error" };
    }
}