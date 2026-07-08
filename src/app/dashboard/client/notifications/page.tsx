"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, MessageSquare, Receipt, FolderKanban } from "lucide-react";
import { cn } from "@/lib/utils";

interface Notification {
  id: string;
  type: "task" | "message" | "invoice" | "project";
  text: string;
  time: string;
  read: boolean;
}

const initialNotifications: Notification[] = [
  { id: "1", type: "message", text: "Agency replied to your message.", time: "5 min ago", read: false },
  { id: "2", type: "task", text: "Contact form task marked in progress.", time: "1 hour ago", read: false },
  { id: "3", type: "invoice", text: "Invoice INV-002 is now pending payment.", time: "Yesterday", read: true },
  { id: "4", type: "project", text: "Homepage design was approved.", time: "2 days ago", read: true },
];

const icons = {
  message: MessageSquare,
  task: CheckCircle2,
  invoice: Receipt,
  project: FolderKanban,
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);

  function markAllRead() {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName="Client Demo" />
        <main className="p-4 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Notifications</h1>
            <button onClick={markAllRead} className="text-sm text-brand-600 hover:underline">
              Mark all as read
            </button>
          </div>
          <Card>
            <div className="space-y-1">
              {notifications.map((n) => {
                const Icon = icons[n.type];
                return (
                  <div
                    key={n.id}
                    className={cn(
                      "flex items-start gap-3 py-3 px-2 rounded-lg border-b last:border-0 border-gray-100 dark:border-gray-800",
                      !n.read && "bg-brand-50 dark:bg-brand-500/5"
                    )}
                  >
                    <Icon size={18} className="text-brand-600 mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm">{n.text}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{n.time}</p>
                    </div>
                    {!n.read && <span className="w-2 h-2 rounded-full bg-brand-600 mt-2 shrink-0" />}
                  </div>
                );
              })}
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}
