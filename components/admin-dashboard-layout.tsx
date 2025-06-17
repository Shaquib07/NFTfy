"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import {
  ChevronDown,
  LayoutDashboard,
  Users,
  Briefcase,
  AlertTriangle,
  Settings,
  BarChart,
  HelpCircle,
  LogOut,
  Terminal,
} from "lucide-react"

interface AdminDashboardLayoutProps {
  children: React.ReactNode
}

interface User {
  email?: string
  role?: string
}

export default function AdminDashboardLayout({ children }: AdminDashboardLayoutProps) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const checkUser = () => {
      try {
        const userData = localStorage.getItem("user")
        if (userData) {
          const parsedUser = JSON.parse(userData)
          setUser(parsedUser)

          if (parsedUser.role !== "admin") {
            router.replace("/dashboard/startup")
          }
        } else {
          router.replace("/login")
        }
      } catch (error) {
        console.error("Error parsing user data:", error)
        router.replace("/login")
      }
    }

    checkUser()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.replace("/login")
  }

  if (!user) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar className="bg-gray-800 text-white">
          <SidebarHeader className="flex items-center p-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1.5 rounded">
                <Terminal className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg">NFTfy Admin</span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/admin">
                    <LayoutDashboard className="h-5 w-5 mr-3" />
                    Dashboard
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Briefcase className="h-5 w-5 mr-3" />
                    Marketplaces
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Users className="h-5 w-5 mr-3" />
                    Users
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <BarChart className="h-5 w-5 mr-3" />
                    Analytics
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <AlertTriangle className="h-5 w-5 mr-3" />
                    Reports
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Settings className="h-5 w-5 mr-3" />
                    Settings
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="p-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start px-2 text-white hover:bg-gray-700">
                  <Avatar className="h-7 w-7 mr-2">
                    <AvatarImage src="/stylized-admin-icon.png" alt="Avatar" />
                    <AvatarFallback>{user?.email?.charAt(0).toUpperCase() ?? "A"}</AvatarFallback>
                  </Avatar>
                  <span className="truncate">{user.email}</span>
                  <ChevronDown className="h-4 w-4 ml-auto" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[200px]">
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Admin Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    System Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-gray-200 bg-white flex items-center px-4 md:px-6">
            <SidebarTrigger className="md:hidden" />
            <div className="ml-auto flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <HelpCircle className="h-4 w-4 mr-2" />
                Help
              </Button>
            </div>
          </header>

          <main className="flex-1 overflow-auto bg-gray-50 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
