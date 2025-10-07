"use client";

import * as React from "react";

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";

const NavStats = () => {
    const { state } = useSidebar();
    const isCollapsed = state == "collapsed";

    return (
        <SidebarGroup className={isCollapsed ? "hidden" : ""}>
            <SidebarGroupLabel className="mt-6 px-3 py-2 text-xs font-medium tracking-wider text-slate-400 uppercase">
                Quick Stats
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <div className="space-y-3 px-4 py-3">
                    <div className="flex items-center gap-3 text-sm">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></div>
                        <span className="text-slate-400">
                            Currently Reading
                        </span>
                        <span className="ml-auto font-semibold text-slate-200">
                            3
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                        <span className="text-slate-400">Books This Year</span>
                        <span className="ml-auto font-semibold text-amber-400">
                            24
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                        <span className="text-slate-400">Reading Goal</span>
                        <span className="ml-auto font-semibold text-purple-400">
                            48/50
                        </span>
                    </div>
                </div>
            </SidebarGroupContent>
        </SidebarGroup>
    );
};

export default NavStats;
