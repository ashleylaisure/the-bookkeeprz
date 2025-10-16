'use client'

import { useBookshelves, useDeleteBookshelf } from '@/actions/bookshelf.action';
import React, { use } from 'react'
import { Button } from '../ui/button';
import { Edit, Trash } from 'lucide-react';
import { alert } from '@/lib/store/useGlobalStore';
import useBookshelfStore from '@/lib/store/useBookshelfStore';

const BookshelfCard = () => {

    const { setSelectedBookshelfId, setBookshelfDialogOpen } = useBookshelfStore();
    const bookshelvesQuery = useBookshelves();
    const deleteBookshelf = useDeleteBookshelf();

    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
            {bookshelvesQuery.data?.map((bookshelf) => (
                <div key={bookshelf.id} className="flex flex-col justify-between gap-3 rounded-lg border p-6">
                    <p className="truncate">{bookshelf.name}</p>
                    <div className="flex gap-1">
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
                                    onConfirm: () => deleteBookshelf.mutate(bookshelf.id)
                                })
                            }}
                            >
                            <Trash />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BookshelfCard