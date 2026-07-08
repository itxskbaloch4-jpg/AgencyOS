import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";

export default function AdminDashboard() {
  const stats = [
    { label: "Active Clients", value: 12 },
    { label: "Active Projects", value: 18 },
    { label: "Pending Invoices", value: 4 },
    { label: "Open Tasks", value: 27 },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName="Admin" />
        <main className="p-4 md:p-6 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <Card key={s.label}>
                <p className="text-sm text-gray-500">{s.label}</p>
                <p className="text-2xl font-bold">{s.value}</p>
              </Card>
            ))}
          </div>
          <AnalyticsChart />
        </main>
      </div>
    </div>
  );
}
