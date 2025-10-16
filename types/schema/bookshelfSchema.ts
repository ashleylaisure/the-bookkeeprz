import z from "zod";

const bookshelfSchema = z.intersection(
    z.object({
        name: z
            .string()
            .trim()
            .min(1, "Name is required")
            .max(255, "Name is too long"),
        description: z
            .string()
            .trim()
            .max(1000, "Description is too long")
            .optional(),
    }),
    z.discriminatedUnion("action", [
        z.object({ action: z.literal("create") }),
        z.object({
            action: z.literal("update"),
            id: z.string().min(1, "Bookshelf ID is required"),
        }),
    ])
);

type BookshelfSchema = z.infer<typeof bookshelfSchema>;

const bookshelfDefaultValues: BookshelfSchema = {
    action: "create",
    name: "",
    description: "",
};

export { bookshelfSchema, bookshelfDefaultValues, type BookshelfSchema };