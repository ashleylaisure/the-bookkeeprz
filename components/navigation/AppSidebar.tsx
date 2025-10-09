"use client";

import * as React from "react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import BrandIcon from "../brand/BrandIcon";
import BrandText from "../brand/BrandText";
import NavMain from "./NavMain";
import NavStats from "./NavStats";
import NavUser from "./NavUser";
import { User } from "@/lib/auth";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
    user?: User;
}

export default function AppSidebar({ user, ...props }: AppSidebarProps) {

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <div>
                                <BrandIcon />
                                <BrandText />
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="height-full flex flex-col justify-between">
                <NavMain />
                <NavStats />
            </SidebarContent>

            <SidebarFooter className="mt-15">
                <NavUser user={user} />
            </SidebarFooter>
        </Sidebar>
    );
}
