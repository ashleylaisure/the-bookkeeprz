import type { Metadata } from "next";
import localFont from "next/font/local";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
import Providers from "@/components/provider";

const inter = localFont({
    src: "./fonts/Inter-VF.ttf",
    variable: "--font-inter",
    weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
    src: "./fonts/SpaceGrotesk-VF.ttf",
    variable: "--font-space-grotesk",
    weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
    title: {
        default: "Bookkeeprz",
        template: "%s | Bookkeeprz",
    },
    description: "Your ultimate bookreading companion",
    icons: {
        icon: "/images/site-logo.svg",
    },
};

const queryClient = new QueryClient();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
            >
                    <Providers>
                            {children}
                    </Providers>
            </body>
        </html>
    );
}
