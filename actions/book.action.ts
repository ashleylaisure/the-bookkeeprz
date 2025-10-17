import useBookStore from "@/lib/store/useBookStore"
import { createBook, deleteBook, getBookById, getBooks, updateBook } from "@/services/book.services"
import { BookSchema } from "@/types/schema/bookSchema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner";

// CREATE
const useCreateBook = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: BookSchema) => {
            await createBook(data)
        },
        onSuccess: () => {
            toast.success("Book created successfully");
            queryClient.invalidateQueries({ queryKey: ['books'] });
        }
    })
}

// READ ALL
const useBooks = () => {
    return useQuery({
        queryKey: ['books'],
        queryFn: getBooks,
    })
}

// READ BY ID
const useBook = () => {
    const { selectedBookId } = useBookStore();
    
    return useQuery({
        queryKey: ["books", { selectedBookId }],
        queryFn: () => getBookById(selectedBookId!),
        enabled: !!selectedBookId,
    })
}

// UPDATE
const useUpdateBook = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: BookSchema) => {
            await updateBook(data)
        },
        onSuccess: () => {
            toast.success("Book updated successfully");
            queryClient.invalidateQueries({ queryKey: ['books'] });
        }
    })
}
// DELETE
const useDeleteBook = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: string) => {
            await deleteBook(id)
        },
        onSuccess: () => {
            toast.success("Book deleted successfully");
            queryClient.invalidateQueries({ queryKey: ['books'] });
        }
    })
}

export {
    useCreateBook,
    useBooks,
    useBook,
    useUpdateBook,
    useDeleteBook,
}

