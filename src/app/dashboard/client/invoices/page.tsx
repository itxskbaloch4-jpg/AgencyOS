import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Download } from "lucide-react";
import { Invoice } from "@/types";

const mockInvoices: Invoice[] = [
  { id: "INV-001", projectId: "p1", amount: 1200, status: "paid" },
  { id: "INV-002", projectId: "p1", amount: 800, status: "pending" },
  { id: "INV-003", projectId: "p2", amount: 1500, status: "overdue" },
];

export default function InvoicesPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName="Client Demo" />
        <main className="p-4 md:p-6">
          <h1 className="text-xl font-bold mb-4">Invoices</h1>
          <Card>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100 dark:border-gray-800">
                  <th className="py-2">Invoice</th>
                  <th className="py-2">Amount</th>
                  <th className="py-2">Status</th>
                  <th className="py-2 text-right">PDF</th>
                </tr>
              </thead>
              <tbody>
                {mockInvoices.map((inv) => (
                  <tr key={inv.id} className="border-b last:border-0 border-gray-100 dark:border-gray-800">
                    <td className="py-3 font-medium">{inv.id}</td>
                    <td className="py-3">${inv.amount.toLocaleString()}</td>
                    <td className="py-3"><Badge status={inv.status} /></td>
                    <td className="py-3 text-right">
                      <button aria-label="Download invoice">
                        <Download size={16} className="text-gray-500 hover:text-brand-600 inline" />
                      </button>
                    </td>
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
