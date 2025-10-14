import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { deleteBookshelf, getBookshelves } from "@/services/bookshelf.services";

const useBookshelves = () => {
    return useQuery({
        queryKey: ["bookshelves"],
        queryFn: getBookshelves,
    });
};

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

export { useBookshelves };
