"use client";

import ROUTES from "@/constants/routes";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";

const LogoutLink = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    
    const handleLogout = async () => {
        await signOut({
            fetchOptions: {
                onRequest: () => {
                    setLoading(true);
                },
                onResponse: () => {
                    setLoading(false);
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                },
                onSuccess: () => {
                    toast.success("You've signed out successfully. See you soon!");
                    router.push(ROUTES.SIGN_IN);
                    router.refresh();
                },
            }
        })
    }

    return (
        <>
            <Link
                href="#"
                onClick={(e) => { if (loading) { e.preventDefault(); return; } handleLogout(); }} 
                aria-disabled={loading}
                className='flex items-center'
            >
                {loading 
                    ?   <div className="flex items-center gap-4">
                            <Spinner className="size-4 text-red-500" />
                            Signing Out...
                        </div>
                    :   <div className="flex items-center gap-4">
                            <LogOut className="h-[1.2rem] w-[1.2rem] text-red-500" />
                            Sign Out
                        </div>
                }
            </Link>
        </>
    );
};

export default LogoutLink;