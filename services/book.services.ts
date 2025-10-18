'use server'

import { executeAction } from "@/lib/excuteAction";
import db from "@/lib/prisma";
import { BookSchema } from "@/types/schema/bookSchema";

// CREATE
const createBook = async (data: BookSchema) => {
    await executeAction({
        actionFn: () => 
            db.book.create({
                data: {
                    title: data.title,
                    author: data.author,
                    description: data.description,
                    totalPages: data.totalPages,
                    genre: data.genre,
                    coverImage: data.coverImage,
                    format: data.format,
                    status: data.status,
                    dateStarted: data.dateStarted,
                    dateFinished: data.dateFinished
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
        title: res.title ?? "",
        author: res.author ?? "",
        description: res.description ?? "",
        totalPages: res.totalPages ?? 0,
        genre: res.genre ?? "",
        coverImage: res.coverImage ?? "",
        dateStarted: res.dateStarted ?? null,
        dateFinished: res.dateFinished ?? null,
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