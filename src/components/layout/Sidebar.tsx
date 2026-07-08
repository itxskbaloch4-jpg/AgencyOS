"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FolderKanban, CheckSquare, FileText, MessageSquare, Receipt, Calendar, Users, Settings, Bell, User } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard/client", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/client/projects", label: "Projects", icon: FolderKanban },
  { href: "/dashboard/client/tasks", label: "Tasks", icon: CheckSquare },
  { href: "/dashboard/client/files", label: "Files", icon: FileText },
  { href: "/dashboard/client/messages", label: "Messages", icon: MessageSquare },
  { href: "/dashboard/client/invoices", label: "Invoices", icon: Receipt },
  { href: "/dashboard/client/calendar", label: "Calendar", icon: Calendar },
  { href: "/dashboard/client/team", label: "Team", icon: Users },
  { href: "/dashboard/client/notifications", label: "Notifications", icon: Bell },
  { href: "/dashboard/client/profile", label: "Profile", icon: User },
  { href: "/dashboard/client/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-gray-200 dark:border-gray-800 min-h-screen p-4">
      <h1 className="text-xl font-bold px-2 mb-6 text-brand-600">AgencyOS</h1>
      <nav className="flex flex-col gap-1">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              pathname === href
                ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10"
                : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            )}
          >
            <Icon size={18} />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
