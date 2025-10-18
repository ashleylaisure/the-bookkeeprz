"use client";

import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Palette, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
    useBookshelf,
    useCreateBookshelf,
    useUpdateBookshelf,
} from "@/actions/bookshelf.action";
import { SHELF_COLORS } from "@/constants";
import useBookshelfStore from "@/lib/store/useBookshelfStore";
import { cn } from "@/lib/utils";
import {
    BookshelfSchema,
    bookshelfDefaultValues,
    bookshelfSchema,
} from "@/types/schema/bookshelfSchema";

import { LoadingButton } from "../loading-button";
import { Button } from "../ui/button";
import { ControlledInput } from "../ui/controlled/controlled-input";
import { ControlledTextarea } from "../ui/controlled/controlled-textarea";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

const BookshelfForm = ({ smallTrigger }: { smallTrigger?: boolean }) => {
    const form = useForm<BookshelfSchema>({
        resolver: zodResolver(bookshelfSchema),
        defaultValues: bookshelfDefaultValues,
    });

    const {
        selectedBookshelfId,
        setSelectedBookshelfId,
        bookshelfDialogOpen,
        setBookshelfDialogOpen,
    } = useBookshelfStore();

    const bookshelfQuery = useBookshelf();
    const createBookshelf = useCreateBookshelf();
    const updateBookshelf = useUpdateBookshelf();

    const isLoading = createBookshelf.isPending || updateBookshelf.isPending;

    const handleDialogChange = (open: boolean) => {
        setBookshelfDialogOpen(open);
        if (!open) {
            setSelectedBookshelfId(null);
            form.reset(bookshelfDefaultValues);
        }
    };

    // if selectedBookshelfId changes, reset the form with the fetched data
    useEffect(() => {
        if (!!selectedBookshelfId && bookshelfQuery.data) {
            form.reset(bookshelfQuery.data);
        }
    }, [bookshelfQuery.data, form, selectedBookshelfId]);

    async function onSubmit(data: BookshelfSchema) {
        const mutation =
            data.action === "create" ? createBookshelf : updateBookshelf;

        mutation.mutate(data, {
            onSuccess: () => handleDialogChange(false),
            onError: (error) => {
                console.error("Error submitting form:", error);
                toast.error(
                    "An error occurred while saving the bookshelf. Please try again."
                );
            },
        });
    }

    return (
        <Dialog open={bookshelfDialogOpen} onOpenChange={handleDialogChange}>
            <DialogTrigger asChild>
                {smallTrigger ? (
                    <Button size="icon" variant="ghost" type="button">
                        <Plus />
                    </Button>
                ) : (
                    <Button>
                        <Plus className="mr-2" />
                        Create Bookshelf
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl">
                        {selectedBookshelfId
                            ? "Edit Bookshelf"
                            : "Create a New Bookshelf"}
                    </DialogTitle>
                </DialogHeader>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <ControlledInput<BookshelfSchema>
                            name="name"
                            label="Name"
                            placeholder="Enter Bookshelf Name"
                        />

                        <ControlledTextarea<BookshelfSchema>
                            name="description"
                            label="Description"
                            placeholder="Optional description of this bookshelf..."
                            // className="min-h-[100px]"
                        />

                        <FormField
                            name="color"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center space-x-2">
                                        <Palette size={16} />
                                        <span>Shelf Color</span>
                                    </FormLabel>

                                    <FormControl>
                                        <div className="grid grid-cols-5 gap-2">
                                            {SHELF_COLORS.map((color) => {
                                                const isSelected =
                                                    form.watch("color") ===
                                                    color;
                                                return (
                                                    <Button
                                                        key={color}
                                                        type="button"
                                                        className={cn(
                                                            "border-border relative size-10 rounded-full border p-0 shadow-sm transition-all",
                                                            "hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-offset-1",
                                                            isSelected &&
                                                                "ring-secondary-foreground ring-2 ring-offset-2"
                                                        )}
                                                        style={{
                                                            backgroundColor:
                                                                color,
                                                        }}
                                                        onClick={() =>
                                                            form.setValue(
                                                                "color",
                                                                color
                                                            )
                                                        }
                                                    ></Button>
                                                );
                                            })}
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <LoadingButton
                            type="submit"
                            loading={isLoading}
                            loadingText="Saving..."
                            className="min-h-12 w-full cursor-pointer"
                        >
                            {!!selectedBookshelfId
                                ? "Edit Bookshelf"
                                : "Create Bookshelf"}
                        </LoadingButton>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default BookshelfForm;
