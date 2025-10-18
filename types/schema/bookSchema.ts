import z from "zod";

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
        .optional(),
    description: z
        .string()
        .trim()
        .max(1000, "Description is too long")
        .optional(),
    totalPages: z
        .string()
        .transform((val) => val ? Number(val) : undefined)
        .refine((val) => val === undefined || (typeof val === "number" && val > 0), {
            message: "Total Pages must be a positive number",
        })
        .optional(),
    genre: z
        .string()
        .optional(),
    coverImage: z
        .string()
        // .url("Cover image must be a valid URL")
        .optional(),
    format: z
        .string()
        .default("PAPERBACK"),
    status: z
        .string()
        .default("TBR"),
    dateStarted: z
        .date()
        .nullable()
        .optional(),
    dateFinished: z
        .date()
        .nullable()
        .optional(),
}).superRefine((data, ctx) => {
  const dateStarted = data.dateStarted as Date | null | undefined;
  const dateFinished = data.dateFinished as Date | null | undefined;

  if (dateStarted && dateFinished && dateFinished < dateStarted) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Date Finished cannot be before Date Started",
      path: ["dateFinished"],
    });
  }
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
    totalPages: undefined,
    genre: "",
    coverImage: "",
    format: "PAPERBACK",
    status: "TBR",
    dateStarted: null,
    dateFinished: null,
};

export { bookSchema, bookDefaultValues, type BookSchema };
