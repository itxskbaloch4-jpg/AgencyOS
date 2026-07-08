import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { ProgressCard } from "@/components/dashboard/ProgressCard";
import { TaskList } from "@/components/dashboard/TaskList";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { Task } from "@/types";

const mockTasks: Task[] = [
  { id: "1", projectId: "p1", title: "Homepage design", status: "done" },
  { id: "2", projectId: "p1", title: "About page", status: "done" },
  { id: "3", projectId: "p1", title: "Contact form", status: "in_progress" },
  { id: "4", projectId: "p1", title: "Blog", status: "todo" },
];

export default function ClientDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName="Client Demo" />
        <main className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProgressCard progress={65} status="in_progress" deliveryDate="Aug 15, 2026" />
          <AnalyticsChart />
          <div className="md:col-span-2">
            <TaskList tasks={mockTasks} />
          </div>
        </main>
      </div>
    </div>
  );
}
