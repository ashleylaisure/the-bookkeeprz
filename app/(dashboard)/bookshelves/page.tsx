import React from "react";

import BookshelfCard from "@/components/cards/BookshelfCard";
import BookshelfForm from "@/components/forms/bookshelf-form";

const BookshelfPage = () => {
    return (
        <>
            <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-3xl font-semibold">Bookshelves</h1>
                    <p className="text-muted-foreground">
                        Organize your books into custom shelves
                    </p>
                </div>
                <BookshelfForm />
            </div>
            <BookshelfCard />
        </>
    );
};

export default BookshelfPage;
