"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { Task } from "@/types";

const initialTasks: Task[] = [
  { id: "1", projectId: "p1", title: "Homepage design", status: "done" },
  { id: "2", projectId: "p1", title: "About page", status: "done" },
  { id: "3", projectId: "p1", title: "Contact form", status: "in_progress" },
  { id: "4", projectId: "p1", title: "Blog", status: "todo" },
  { id: "5", projectId: "p2", title: "Product catalog", status: "todo" },
];

const columns: { key: Task["status"]; label: string }[] = [
  { key: "todo", label: "To Do" },
  { key: "in_progress", label: "In Progress" },
  { key: "done", label: "Done" },
];

export default function TasksPage() {
  const [tasks] = useState(initialTasks);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName="Client Demo" />
        <main className="p-4 md:p-6">
          <h1 className="text-xl font-bold mb-4">Tasks</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {columns.map((col) => (
              <div key={col.key}>
                <h3 className="text-sm font-semibold mb-3 text-gray-500">{col.label}</h3>
                <div className="space-y-3">
                  {tasks.filter((t) => t.status === col.key).map((task) => (
                    <Card key={task.id} className="text-sm">{task.title}</Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
