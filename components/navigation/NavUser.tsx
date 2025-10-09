import Link from "next/link";
import { useEffect, useState } from "react";

import {
    ChevronDown,
    Download,
    LogOut,
    MoonIcon,
    Settings,
    SunIcon,
    User,
} from "lucide-react";

import ROUTES from "@/constants/routes";
import useSystemTheme from "@/hooks/use-system-theme";

import LogoutLink from "../forms/auth/LogoutLink";
import { Avatar, AvatarFallback } from "../ui/avatar";
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

export default function NavUser() {
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
                                <Avatar className="h-8 w-8 rounded-lg">
                                    {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                                    <AvatarFallback className="bg-primary rounded-lg text-white">
                                        AL
                                    </AvatarFallback>
                                </Avatar>

                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    {/* <span className="truncate font-medium">{user.name}</span>
                                    <span className="truncate text-xs">{user.email}</span> */}
                                    <span className="truncate font-medium">
                                        name
                                    </span>
                                    <span className="truncate text-xs">
                                        email
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
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                                        <AvatarFallback className="bg-primary text-muted rounded-lg">
                                            AL
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-medium">
                                            name
                                        </span>
                                        <span className="truncate text-xs">
                                            email
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
                                        <User className="h-[1.2rem] w-[1.2rem]" />
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
