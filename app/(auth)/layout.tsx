
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    // TODO: Redirect already logged-in users
    
    return (
        <main className="flex min-h-screen items-center justify-center bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat px-4 py-10">
            <section className="light-border bg-card shadow-card-foreground/20 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
                {children}
            </section>
        </main>
    );
}