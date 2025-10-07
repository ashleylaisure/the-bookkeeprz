import z from "zod";

const signInSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required." })
        .email({ message: "Please provide a valid email address." }),

    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters long." })
        .max(100, { message: "Password cannot exceed 100 characters." })
        // .regex(/[A-Z]/, {
        //     message: "Password must contain at least one uppercase letter.",
        // })
        // .regex(/[a-z]/, {
        //     message: "Password must contain at least one lowercase letter.",
        // })
        // .regex(/[0-9]/, {
        //     message: "Password must contain at least one number.",
        // })
        // .regex(/[^a-zA-Z0-9]/, {
        //     message: "Password must contain at least one special character.",
        // }),
});

type SignInSchema = z.infer<typeof signInSchema>;

const signInDefaultValues: SignInSchema = {
    email: "",
    password: "",
};

export { signInSchema, signInDefaultValues, type SignInSchema };
