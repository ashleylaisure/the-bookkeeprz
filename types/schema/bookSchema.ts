import z from "zod";

const BookFormatEnum = z.enum(["HARDCOVER", "PAPERBACK", "EBOOK", "AUDIOBOOK"]);
const BookStatusEnum = z.enum(["TBR", "READING", "READ", "PAUSED", "DNF"]);

const bookSchema = z.intersection(
    z.object({
        title: z
            .string()
            .trim()
            .min(1, "Title is required")
            .max(255, "Title must be less than 255 characters"),
        author: z
            .string()
            .trim()
            .max(200, "Author must be less than 200 characters")
            .nullable()
            .optional(),
        description: z
            .string()
            .trim()
            .max(1000, "Description is too long")
            .nullable()
            .optional(),
        totalPages: z
            .number({ error: "Total pages must be a number" })
            .int()
            .positive("Total pages must be greater than 0")
            .nullable()
            .optional(),
        genre: z
            .string()
            .trim()
            .max(100, "Genre must be less than 100 characters")
            .nullable()
            .optional(),
        coverImage: z
            .string()
            // .url("Cover image must be a valid URL")
            .nullable()
            .optional(),
        format: BookFormatEnum.default("PAPERBACK"),
        status: BookStatusEnum.default("TBR"),
        dateStarted: z
            .date()
            .nullable()
            .optional(),
        dateFinished: z
            .date()
            .nullable()
            .optional(),
    }),
    z.discriminatedUnion("action", [
        z.object({ action: z.literal("create") }),
        z.object({
            action: z.literal("update"),
            id: z.string().min(1, "Book ID is required"),
        }),
    ])
);

type BookSchema = z.infer<typeof bookSchema>;

const bookDefaultValues: BookSchema = {
    action: "create",
    title: "",
    author: "",
    description: "",
    totalPages: null,
    genre: "",
    coverImage: "",
    format: "PAPERBACK",
    status: "TBR",
    dateStarted: null,
    dateFinished: null,
};

export { bookSchema, bookDefaultValues, type BookSchema };
