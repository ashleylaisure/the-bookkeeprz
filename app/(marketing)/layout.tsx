// import { getSession } from "@/lib/auth";
// import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function LandingPageLayout({
    children,
}: {
    children: ReactNode;
}) {

    return <>{children}</>;
}
