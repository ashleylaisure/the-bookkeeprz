import z from "zod";

const signUpSchema = z
    .object({
        name: z
            .string()
            .trim()
            .min(1, { message: "Name is required." })
            .max(50, { message: "Name cannot exceed 50 characters." })
            .regex(/^[a-zA-Z\s]+$/, {
                message: "Name can only contain letters and spaces.",
            }),
        email: z
            .string()
            .min(1, { message: "Email is required." })
            .email({ message: "Please provide a valid email address." }),

        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters long." })
            .max(100, { message: "Password cannot exceed 100 characters." }),
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

        passwordConfirmation: z
            .string()
            .min(1, { message: "Please confirm your password." }),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match.",
        path: ["passwordConfirmation"],
    });

type SignUpForm = z.infer<typeof signUpSchema>;

const signUpDefaultValues: SignUpForm = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
};

export { signUpSchema, signUpDefaultValues, type SignUpForm };
