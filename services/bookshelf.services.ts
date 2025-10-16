'use server'

import { executeAction } from "@/lib/excuteAction";
import db from "@/lib/prisma";
import { BookshelfSchema } from "@/types/schema/bookshelfSchema";

// CREATE a new bookshelf
const createBookshelf = async (data: BookshelfSchema) => {
    await executeAction({
        actionFn: () =>
            db.bookshelf.create({
                data : {
                    name: data.name,
                    description: data.description,
                },
            }),
    });
};

// READ all bookshelves
const getBookshelves = async () => {
    return await db.bookshelf.findMany();
};

// READ a bookshelf by ID
const getBookshelf = async (id: string):  Promise<BookshelfSchema> => {
    const res = await db.bookshelf.findFirst({
        where: { id },
    });

    return {
        action: "update",
        name: res?.name || "",
        description: res?.description || "",
        id,
    }
}

// UPDATE an existing bookshelf
const updateBookshelf = async (data: BookshelfSchema) => {
    if (data.action === "update"){
        await executeAction({
            actionFn: () => 
                db.bookshelf.update({
                    where: { id: data.id },
                    data: {
                        name: data.name,
                        description: data.description,
                    },
                })
        })
    }
}

// DELETE a bookshelf by ID
const deleteBookshelf = async (id: string) => {
    await executeAction({
        actionFn: () =>
            db.bookshelf.delete({
                where: { id },
            }),
    });
};



export { 
    createBookshelf, 
    getBookshelves, 
    getBookshelf,
    updateBookshelf,
    deleteBookshelf,
};