"use client";

import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import AlertDialogProvider from "./AlertDialogProvider";
import { toast } from "sonner";

import AlertDialogProvider from "./AlertDialogProvider";
import { Toaster } from "./ui/sonner";

const queryClient = new QueryClient({
    defaultOptions: {
        mutations: {
            onError: (e) => {
                if (e.message === "NEXT_REDIRECT") return;
                toast.error(e.message);
            },
            onSuccess: () => {
                toast.success("Operation was successful.");
            },
        },
    },
});

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <NextThemesProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Toaster position="top-center" richColors />
                <AlertDialogProvider />
                {children}
            </NextThemesProvider>
        </QueryClientProvider>
    );
}
