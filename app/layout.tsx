import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css";

const inter = localFont({
    src: './fonts/Inter-VF.ttf',
    variable: "--font-inter",
    weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
    src: './fonts/SpaceGrotesk-VF.ttf',
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
        icon: '/images/site-logo.svg',
    }
};

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
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>    
            </body>
        </html>
    );
}
