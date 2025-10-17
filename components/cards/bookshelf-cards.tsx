"use client";

import React, { use } from "react";

import { Edit, TextAlignJustify, TextInitial, Trash } from "lucide-react";

import { useBookshelves, useDeleteBookshelf } from "@/actions/bookshelf.action";
import useBookshelfStore from "@/lib/store/useBookshelfStore";
import { alert } from "@/lib/store/useGlobalStore";
import { cn } from "@/lib/utils";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import BookshelfCardsSkeleton from "./bookshelf-cards-skeleton";
import NoItemsFound from "./no-items-found";

const BookshelfCard = () => {
    const { setSelectedBookshelfId, setBookshelfDialogOpen } =
        useBookshelfStore();
    const bookshelvesQuery = useBookshelves();
    const deleteBookshelf = useDeleteBookshelf();

    if (bookshelvesQuery.data?.length === 0) {
        return (
            <NoItemsFound
                heading="No Bookshelves Found"
                subheading="Looks like you haven't created any bookshelves yet."
                buttonText="Create Bookshelf"
                onClick={() => {
                    setBookshelfDialogOpen(true);
                }}
            />
        )
    }

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 xl:grid-cols-2">
            {bookshelvesQuery.isLoading ? (
                <BookshelfCardsSkeleton />
            ) : (
                <>
                    {bookshelvesQuery.data?.map((bookshelf) => (
                        <Card key={bookshelf.id} className="overflow-hidden">
                            {/* Header */}
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                    {/* Left section: Bookshelf Color Indicator + Title */}
                                    <div className="flex w-full items-center gap-3">
                                        <div
                                            className="border-border h-5.5 w-5.5 shrink-0 rounded-full border p-0 shadow-sm"
                                            style={{ backgroundColor: bookshelf.color }}
                                            />
                                        <CardTitle className="truncate text-base font-semibold">
                                            {bookshelf.name}
                                        </CardTitle>
                                    </div>

                                    {/* Right section: Badges + Action Buttons */}
                                    <div className="flex items-center gap-2">
                                        {/* Bookshelf Badges */}
                                        {/* {bookshelf.description && (
                                            <Badge
                                                className="flex h-5 items-center justify-center rounded-full"
                                                backgroundColor={bookshelf.color}
                                                >
                                                <TextAlignJustify className="h-3 w-3" />
                                                </Badge>
                                                )} */}
                                        <Badge
                                            className="h-5 min-w-5 rounded-full px-1"
                                            backgroundColor={bookshelf.color}
                                            >
                                            20
                                        </Badge>

                                        {/* Action Buttons */}
                                        <Button
                                            className="size-6"
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => {
                                                setSelectedBookshelfId(bookshelf.id);
                                                setBookshelfDialogOpen(true);
                                            }}
                                            >
                                            <Edit />
                                        </Button>

                                        <Button
                                            className="size-6"
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => {
                                                alert({
                                                    title: "Delete Bookshelf",
                                                    description: `Are you sure you want to delete the bookshelf "${bookshelf.name}"? This action cannot be undone.`,
                                                    onConfirm: () =>
                                                        deleteBookshelf.mutate(
                                                            bookshelf.id
                                                        ),
                                                });
                                            }}
                                            >
                                            <Trash />
                                        </Button>
                                    </div>
                                </div>
                                
                                {bookshelf.description && (
                                    <p className="mt-1 text-sm text-muted-foreground truncate ml-8.5">
                                        {bookshelf.description}
                                    </p>
                                )}
                                
                            </CardHeader>

                            <CardContent className="pt-0">
                                <div className="from-muted/30 to-muted relative w-full rounded-xl bg-gradient-to-b p-2 shadow-inner">
                                    {/* Top Shelf*/}
                                    {/* <div className="w-full h-3 rounded-t-md shadow-lg mb-6 relative"
                                        style={{
                                            background: `linear-gradient(to right, ${bookshelf.color}70, ${bookshelf.color})`,
                                            }}
                                            >
                                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-white/10 rounded-t-md" />
                                    </div> */}

                                    {/* Books go here */}
                                    <div className="flex h-20 items-end justify-center gap-2">
                                        {/* Placeholder Books */}
                                        {Array.from({ length: 7 }).map((_, i) => {
                                            const heights = [
                                                "h-16",
                                                "h-14",
                                                "h-18",
                                                "h-12",
                                                "h-15",
                                                "h-10",
                                                "h-13",
                                            ];
                                            return (
                                                <div
                                                key={i}
                                                    className={cn(
                                                        "w-10 rounded-md bg-white/80 shadow-md",
                                                        heights[i % heights.length]
                                                    )}
                                                    />
                                                );
                                        })}

                                        {/* Overlay Placeholder Text */}
                                        <div className="from-background/60 pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t to-transparent">
                                            <p className="text-muted-foreground text-sm font-medium">
                                                No Books Added Yet
                                            </p>
                                            <p className="text-muted-foreground text-xs opacity-75">
                                                Add a book to fill your shelf
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Shelf */}
                                    <div
                                        className="relative h-3 w-full rounded-b-md shadow-inner"
                                        style={{
                                            background: `linear-gradient(to right, ${bookshelf.color}70, ${bookshelf.color})`,
                                        }}
                                        >
                                        <div className="absolute inset-0 rounded-b-md bg-gradient-to-b from-white/10 to-black/20" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </>
            )
            }
        </div>
    );
};

export default BookshelfCard;
