import BookshelfCard from "@/components/cards/BookshelfCard";
import BookshelfForm from "@/components/forms/bookshelf-form";
import React from "react";

const BookshelfPage = () => {
    return (
        <>
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl font-semibold">
                    Your Bookshelves
                </h1>
                <BookshelfForm />
            </div>
            <BookshelfCard />
        </>
    );
};

export default BookshelfPage;
