import z from "zod";

const bookSchema = z.intersection(
    z.object({
        userId: z.string().min(1, "User ID is required").max(255).trim(),
        title: z
            .string()
            .min(1, "Title is required")
            .max(255, "Title is too long")
            .trim(),
        description: z
            .string()
            .max(1000, "Description is too long")
            .trim()
            .optional(),
    }),
    z.discriminatedUnion("action", [
        z.object({ action: z.literal("create") }),
        z.object({
            action: z.literal("update"),
            id: z.string().min(1, "Book ID is required").max(255).trim(),
        }),
    ])
);

type BookSchema = z.infer<typeof bookSchema>;

const bookDefaultValues: BookSchema = {
    action: "create",
    userId: "",
    title: "",
    description: "",
};

export { bookSchema, bookDefaultValues, type BookSchema };
