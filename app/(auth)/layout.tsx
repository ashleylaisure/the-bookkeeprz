import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign up",
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // TODO: Redirect already logged-in users

    return (
        <main className="bg-auth-light dark:bg-auth-dark flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10">
            {children}
        </main>
    );
}
