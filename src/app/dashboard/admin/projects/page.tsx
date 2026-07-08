"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import { Project } from "@/types";

const mockProjects: Project[] = [
  { id: "p1", name: "Corporate Website Redesign", clientId: "Marco Rossi", status: "in_progress", progress: 65, deliveryDate: "Aug 15, 2026", createdAt: "2026-05-01" },
  { id: "p2", name: "E-commerce Store", clientId: "Sophie Laurent", status: "review", progress: 90, deliveryDate: "Jul 20, 2026", createdAt: "2026-04-10" },
];

export default function AdminProjectsPage() {
  const [projects] = useState(mockProjects);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName="Admin" />
        <main className="p-4 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Projects</h1>
            <Button className="flex items-center gap-2"><Plus size={16} /> New Project</Button>
          </div>
          <Card>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100 dark:border-gray-800">
                  <th className="py-2">Project</th>
                  <th className="py-2">Client</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Progress</th>
                  <th className="py-2">Delivery</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p.id} className="border-b last:border-0 border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-medium">{p.name}</td>
                    <td className="py-3">{p.clientId}</td>
                    <td className="py-3"><Badge status={p.status} /></td>
                    <td className="py-3">{p.progress}%</td>
                    <td className="py-3">{p.deliveryDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </main>
      </div>
    </div>
  );
}
