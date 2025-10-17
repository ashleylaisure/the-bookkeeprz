import { CreateStore } from "./CreateStore";

type Store = {
    selectedBookId: string | null;
    bookDialogOpen: boolean;
    setSelectedBookId: (id: string | null) => void;
    setBookDialogOpen: (open: boolean) => void;
}

const useBookStore = CreateStore<Store>(
    (set) => ({
        selectedBookId: null,
        bookDialogOpen: false,
        setSelectedBookId: (id) =>
            set((state) => {
                state.selectedBookId = id;
            }),
        setBookDialogOpen: (open) =>
            set((state) => {
                state.bookDialogOpen = open;
            }),
    }),
    { name: "book-store" }
);

export default useBookStore;