'use client'
import { useBookshelf, useCreateBookshelf, useUpdateBookshelf } from "@/actions/bookshelf.action";
import useBookshelfStore from "@/lib/store/useBookshelfStore";
import { bookshelfDefaultValues, bookshelfSchema, BookshelfSchema } from "@/types/schema/bookshelfSchema"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Form } from "../ui/form";
import { ControlledInput } from "../ui/controlled/controlled-input";
import { LoadingButton } from "../loading-button";
import { ControlledTextarea } from "../ui/controlled/controlled-textarea";
import { useEffect } from "react";

const BookshelfForm = ( {smallTrigger}: {smallTrigger?: boolean} ) => {

    const form = useForm<BookshelfSchema>({
        resolver: zodResolver(bookshelfSchema),
        defaultValues: bookshelfDefaultValues,
    });

    const {
        selectedBookshelfId,
        setSelectedBookshelfId,
        bookshelfDialogOpen,
        setBookshelfDialogOpen,
    } = useBookshelfStore()

    const bookshelfQuery = useBookshelf();
    const createBookshelf = useCreateBookshelf();
    const updateBookshelf = useUpdateBookshelf();

    const loading = createBookshelf.isPending || updateBookshelf.isPending

    const handleDialogChange = (open: boolean) => {
        setBookshelfDialogOpen(open);
        if (!open) {
            setSelectedBookshelfId(null);
            form.reset(bookshelfDefaultValues);
        }
    }

    // if selectedBookshelfId changes, reset the form with the fetched data
    useEffect(() => {
        if (!!selectedBookshelfId && bookshelfQuery.data) {
            form.reset(bookshelfQuery.data);
        }
    }, [bookshelfQuery.data, form, selectedBookshelfId]);

    async function onSubmit(data: BookshelfSchema) {
        const mutation = data.action === "create" ? createBookshelf : updateBookshelf;

        mutation.mutate(data, {
            onSuccess: () => handleDialogChange(false),
            onError: (error) => {
                console.error("Error submitting form:", error);
                toast.error("An error occurred while saving the bookshelf. Please try again.");
            }
        });
    }

    return (
        <Dialog open={bookshelfDialogOpen} onOpenChange={handleDialogChange}>
            <DialogTrigger asChild>
                {smallTrigger ? (
                    <Button
                        size="icon"
                        variant="ghost"
                        type="button"
                    >
                        <Plus />
                    </Button>
                ) : (
                    <Button>
                        <Plus className="mr-2" />
                        New Bookshelf
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl">
                        {selectedBookshelfId ? "Edit Bookshelf" : "Create a New Bookshelf"}
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <ControlledInput<BookshelfSchema>
                            name="name"
                            label="Name"
                            placeholder="Enter Bookshelf Name"
                        />
                        <ControlledTextarea<BookshelfSchema>
                            name="description"
                            label="Description"
                            placeholder="Enter Bookshelf Description"
                            // className="min-h-[100px]"
                        />

                        <LoadingButton
                            type="submit"
                            loading={loading}
                            loadingText="Saving..."
                            className="min-h-12 w-full cursor-pointer"
                        >
                            {!!selectedBookshelfId ? "Edit Bookshelf" : "Create Bookshelf"}
                        </LoadingButton>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default BookshelfForm;