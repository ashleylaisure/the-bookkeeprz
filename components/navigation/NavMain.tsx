"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarLinks } from "@/constants/sidebar-links";
import { cn } from "@/lib/utils";

export default function NavMain() {
    const pathname = usePathname();

    return (
        <SidebarGroup>
            <SidebarGroupLabel className="px-3 py-2 text-xs font-medium tracking-wider text-slate-400 uppercase">
                Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                    {sidebarLinks.map((link) => {
                        const Icon = link.icon;

                        const isActive =
                            (pathname.includes(link.route) &&
                                link.route.length > 1) ||
                            pathname === link.route;

                        return (
                            <SidebarMenuItem key={link.label}>
                                <SidebarMenuButton tooltip={link.label} asChild>
                                    <Link
                                        href={link.route}
                                        className={cn(
                                            isActive ? "primary-gradient" : "",
                                            "flex items-center justify-start gap-4 rounded-lg bg-transparent p-4"
                                        )}
                                    >
                                        <Icon
                                            size={20}
                                            className={cn(
                                                isActive
                                                    ? "text-white"
                                                    : "opacity-60"
                                            )}
                                        />

                                        <p
                                            className={cn(
                                                "text-sm",
                                                isActive &&
                                                    "text-muted font-medium"
                                            )}
                                        >
                                            {link.label}
                                        </p>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
