import { executeAction } from "@/lib/excuteAction";
import db from "@/lib/prisma";
import { BookSchema } from "@/types/schema/bookSchema";

// CREATE
const createBook = async (data: BookSchema) => {
    await executeAction({
        actionFn: () => 
            db.book.create({
                data: {
                    ...data,
                    dateStarted: data.dateStarted ? new Date(data.dateStarted) : undefined,
                    dateFinished: data.dateFinished ? new Date(data.dateFinished) : undefined,
                }
            })
    })
}
// READ ALL
const getBooks = async () => {
    return await db.book.findMany({
        orderBy: { updatedAt: "desc" },
    });
}
// READ BY ID
const getBookById = async (id: string): Promise<BookSchema | null> => {
    const res = await db.book.findFirst({
        where: { id }
    });
    if (!res) return null;

    return {
        ...res,
        action: "update" as const,
        title: res.title ?? undefined,
        author: res.author ?? undefined,
        description: res.description ?? undefined,
        totalPages: res.totalPages ?? undefined,
        genre: res.genre ?? undefined,
        coverImage: res.coverImage ?? undefined,
        dateStarted: res.dateStarted ?? undefined,
        dateFinished: res.dateFinished ?? undefined,
        id,
    };
}
// UPDATE
const updateBook = async (data: BookSchema) => {
    if (data.action === "update") {
        await executeAction({
            actionFn:() => db.book.update({
                where: { id: data.id },
                data: { ...data }
            })
        });
    }
}
// DELETE
const deleteBook = async (id: string) => {
    await executeAction({
        actionFn: () => db.book.delete({
            where: { id }
        })
    });
}

export {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
};