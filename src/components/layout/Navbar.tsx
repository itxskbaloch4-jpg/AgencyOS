"use client";

import { Bell, Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function Navbar({ userName }: { userName: string }) {
  const { theme, toggle } = useTheme();
  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-gray-200 dark:border-gray-800">
      <button className="md:hidden"><Menu size={22} /></button>
      <div className="flex-1" />
      <div className="flex items-center gap-4">
        <button onClick={toggle} aria-label="Toggle theme">
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <button aria-label="Notifications"><Bell size={18} /></button>
        <span className="text-sm font-medium">{userName}</span>
      </div>
    </header>
  );
}
