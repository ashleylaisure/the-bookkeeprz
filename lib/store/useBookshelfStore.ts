import { CreateStore } from "./CreateStore";

type Store = {
    selectedBookshelfId: string | null;
    bookshelfDialogOpen: boolean;
    setSelectedBookshelfId: (id: string | null) => void;
    setBookshelfDialogOpen: (open: boolean) => void;
}

const useBookshelfStore = CreateStore<Store>((set) => ({
    selectedBookshelfId: null,
    bookshelfDialogOpen: false,
    setSelectedBookshelfId: (id) => set((state) => {state.selectedBookshelfId = id}),
    setBookshelfDialogOpen: (open) => set((state) => {state.bookshelfDialogOpen = open}),
}),
{ name: "bookshelf-store" }
);

export default useBookshelfStore;