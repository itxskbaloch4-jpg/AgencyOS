"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import { Invoice } from "@/types";

const mockInvoices: Invoice[] = [
  { id: "INV-001", projectId: "Corporate Website Redesign", amount: 1200, status: "paid" },
  { id: "INV-002", projectId: "Corporate Website Redesign", amount: 800, status: "pending" },
  { id: "INV-003", projectId: "E-commerce Store", amount: 1500, status: "overdue" },
];

export default function AdminInvoicesPage() {
  const [invoices] = useState(mockInvoices);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName="Admin" />
        <main className="p-4 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Invoices</h1>
            <Button className="flex items-center gap-2"><Plus size={16} /> New Invoice</Button>
          </div>
          <Card>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100 dark:border-gray-800">
                  <th className="py-2">Invoice</th>
                  <th className="py-2">Project</th>
                  <th className="py-2">Amount</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id} className="border-b last:border-0 border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-medium">{inv.id}</td>
                    <td className="py-3">{inv.projectId}</td>
                    <td className="py-3">${inv.amount.toLocaleString()}</td>
                    <td className="py-3"><Badge status={inv.status} /></td>
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
