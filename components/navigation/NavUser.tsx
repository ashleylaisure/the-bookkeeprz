import Link from "next/link";
import { useEffect, useState } from "react";

import {
    ChevronDown,
    Download,
    LogOut,
    MoonIcon,
    Settings,
    SunIcon,
    User2,
} from "lucide-react";

import ROUTES from "@/constants/routes";
import useSystemTheme from "@/hooks/use-system-theme";
import type { User } from "@/lib/auth";

import UserAvatar from "../UserAvatar";
import LogoutLink from "../forms/auth/LogoutLink";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
    SidebarFooter,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "../ui/sidebar";

export default function NavUser({ user }: { user?: User }) {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useSystemTheme();

    // Prevent hydration mismatch
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton size="lg" className="group">
                                <UserAvatar
                                    name={user?.name}
                                    image={user?.image}
                                />
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">
                                        {user?.name}
                                    </span>
                                    <span className="truncate text-xs">
                                        {user?.email}
                                    </span>
                                </div>

                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-270" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                            side={"right"}
                            align="end"
                            className="w-[--radix-popper-anchor-width] min-w-56 rounded-lg"
                            sideOffset={25}
                        >
                            <DropdownMenuLabel className="p-0 font-normal">
                                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                    <UserAvatar
                                        name={user?.name}
                                        image={user?.image}
                                    />
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-medium">
                                            {user?.name}
                                        </span>
                                        <span className="truncate text-xs">
                                            {user?.email}
                                        </span>
                                    </div>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />

                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <Link
                                        href={ROUTES.PROFILE}
                                        className="flex items-center gap-4"
                                    >
                                        <User2 className="h-[1.2rem] w-[1.2rem]" />
                                        Profile
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-[1.2rem] w-[1.2rem]" />
                                    Settings
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    {/* <Link href={ROUTES.IMPORT} className="flex items-center gap-4"> */}
                                    <Download className="h-[1.2rem] w-[1.2rem]" />
                                    Import Books
                                    {/* </Link> */}
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />

                            {theme === "light" ? (
                                <DropdownMenuItem
                                    onClick={() => setTheme("dark")}
                                >
                                    <MoonIcon className="mr-2 h-[1.2rem] w-[1.2rem]" />
                                    Dark Mode
                                </DropdownMenuItem>
                            ) : (
                                <DropdownMenuItem
                                    onClick={() => setTheme("light")}
                                >
                                    <SunIcon className="mr-2 h-[1.2rem] w-[1.2rem]" />
                                    Light Mode
                                </DropdownMenuItem>
                            )}

                            <DropdownMenuItem variant="destructive">
                                <LogoutLink />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    );
}
