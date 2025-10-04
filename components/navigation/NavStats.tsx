"use client"

import * as React from "react"

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"

const NavStats = () => {

    const {state} = useSidebar();
    const isCollapsed = state == 'collapsed'
    
    return (
        <SidebarGroup className={isCollapsed ? 'hidden' : ''}>
            <SidebarGroupLabel className="text-xs font-medium text-slate-400 uppercase tracking-wider px-3 py-2 mt-6">
                Quick Stats
            </SidebarGroupLabel>
                <SidebarGroupContent>
                    <div className="px-4 py-3 space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            <span className="text-slate-400">Currently Reading</span>
                            <span className="ml-auto font-semibold text-slate-200">3</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                            <span className="text-slate-400">Books This Year</span>
                            <span className="ml-auto font-semibold text-amber-400">24</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-slate-400">Reading Goal</span>
                            <span className="ml-auto font-semibold text-purple-400">48/50</span>
                        </div>
                    </div>
                </SidebarGroupContent>
        </SidebarGroup>
    )
}

export default NavStats