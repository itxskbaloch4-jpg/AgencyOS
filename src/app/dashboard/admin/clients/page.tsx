"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  projects: number;
}

const mockClients: Client[] = [
  { id: "1", name: "Marco Rossi", company: "Rossi Design Studio", email: "marco@rossidesign.it", projects: 2 },
  { id: "2", name: "Sophie Laurent", company: "Laurent & Co", email: "sophie@laurentco.fr", projects: 1 },
];

export default function AdminClientsPage() {
  const [clients] = useState(mockClients);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName="Admin" />
        <main className="p-4 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Clients</h1>
            <Button className="flex items-center gap-2"><Plus size={16} /> New Client</Button>
          </div>
          <Card>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100 dark:border-gray-800">
                  <th className="py-2">Name</th>
                  <th className="py-2">Company</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Projects</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((c) => (
                  <tr key={c.id} className="border-b last:border-0 border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-medium">{c.name}</td>
                    <td className="py-3">{c.company}</td>
                    <td className="py-3">{c.email}</td>
                    <td className="py-3">{c.projects}</td>
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
