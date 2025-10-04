"use client"

import * as React from "react"

import NavMain from "./NavMain"
import NavUser from "./NavUser"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import BrandIcon from "../brand/BrandIcon"
import BrandText from "../brand/BrandText"
import NavStats from "./NavStats"

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

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

            <SidebarContent className="flex height-full justify-between flex-col">
                <NavMain />
                <NavStats />
            </SidebarContent>

            <SidebarFooter className="mt-15">
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    )
}

