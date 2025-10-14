import z from "zod";

const userProfileSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, { message: "Name is required." })
        .max(50, { message: "Name cannot exceed 50 characters." })
        .regex(/^[a-zA-Z\s]+$/, {
            message: "Name can only contain letters and spaces.",
        }),
    image: z.string().optional().nullable(),
});

type UserProfileSchema = z.infer<typeof userProfileSchema>;

const userProfileDefaultValues: UserProfileSchema = {
    name: "",
    image: "",
};

export { userProfileSchema, userProfileDefaultValues, type UserProfileSchema };
