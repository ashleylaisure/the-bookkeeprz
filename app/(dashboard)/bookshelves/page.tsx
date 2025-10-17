import React from "react";

import BookshelfCard from "@/components/cards/bookshelf-cards";
import BookshelfForm from "@/components/forms/bookshelf-form";
import { PageHeader } from "@/components/page-header";

const BookshelfPage = () => {
    return (
        <>
            <PageHeader
                title="Bookshelves"
                description="Organize your books into custom shelves"
                action={<BookshelfForm />}
            />
            <BookshelfCard />
        </>
    );
};

export default BookshelfPage;
