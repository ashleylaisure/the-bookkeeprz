import BookTable from "@/components/book-table";
import BookForm from "@/components/forms/book-form";
import { PageHeader } from "@/components/page-header";
import React from "react";

const MyBooksPage = () => {
    return (
        <>
            <PageHeader
                title="My Books"
                description="Manage your personal book collection"
                action={<BookForm />}
                variant="centered"
            />
            <BookTable />
        </>
    );
};

export default MyBooksPage;
