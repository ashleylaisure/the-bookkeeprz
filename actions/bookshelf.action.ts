import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { createBookshelf, deleteBookshelf, getBookshelf, getBookshelves, updateBookshelf } from "@/services/bookshelf.services";
import { BookshelfSchema } from "@/types/schema/bookshelfSchema";
import useBookshelfStore from "@/lib/store/useBookshelfStore";

// CREATE
const useCreateBookshelf = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: async (data: BookshelfSchema)=> {
            await createBookshelf(data);
        },
        onSuccess: () => {
            toast.success("Bookshelf created successfully.");
            queryClient.invalidateQueries({ queryKey: ["bookshelves"] });
        },
    });
}

// READ
const useBookshelves = () => {
    return useQuery({
        queryKey: ["bookshelves"],
        queryFn: getBookshelves,
    });
};

const useBookshelf = () => {
    const { selectedBookshelfId } = useBookshelfStore();

    return useQuery({
        queryKey: ["bookshelves", { selectedBookshelfId }],
        queryFn: () => getBookshelf(selectedBookshelfId!),
        enabled: !!selectedBookshelfId,
    })
}


// UPDATE
const useUpdateBookshelf = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: BookshelfSchema) => {
            await updateBookshelf(data)
        },
        onSuccess: () => {
            toast.success("Bookshelf updated successfully.");
            queryClient.invalidateQueries({ queryKey: ["bookshelves"] });
        },
    })
}

// DELETE
const useDeleteBookshelf = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: string) => {
            await deleteBookshelf(id);
        },
        onSuccess: () => {
            toast.success("Bookshelf deleted");
            queryClient.invalidateQueries({ queryKey: ["bookshelves"] });
        },
    });
};

export { 
    useCreateBookshelf, 
    useUpdateBookshelf, 
    useBookshelf,
    useBookshelves,
    useDeleteBookshelf
};
