"use client"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { sidebarLinks } from "@/constants/sidebar-links"
import { cn } from "@/lib/utils"
import  Link  from "next/link"
import { usePathname } from "next/navigation"

export default function NavMain() {

  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-xs font-medium text-slate-400 uppercase tracking-wider px-3 py-2">
        Navigation
      </SidebarGroupLabel>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {sidebarLinks.map((link) => {

            const Icon = link.icon

            const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

            return (
              <SidebarMenuItem key={link.label}>
                <SidebarMenuButton tooltip={link.label} asChild>
                  <Link
                    href={link.route}
                    className={cn(
                      isActive
                        ? 'primary-gradient'
                        : ""
                        , "flex items-center justify-start gap-4 bg-transparent p-4 rounded-lg"
                    )}
                  >
                    <Icon
                      size={20}
                      className={cn(isActive ? "text-white" : "opacity-60")}
                    />

                    <p className={cn('text-sm', isActive && 'font-medium text-muted')}>{link.label}</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
