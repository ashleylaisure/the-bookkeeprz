import { executeAction } from "@/lib/excuteAction";
import db from "@/lib/prisma";

const getBookshelves = async () => {
    return await db.bookshelf.findMany();
};

const deleteBookshelf = async (id: string) => {
    await executeAction({
        actionFn: () =>
            db.bookshelf.delete({
                where: { id },
            }),
    });
};

export { getBookshelves, deleteBookshelf };
