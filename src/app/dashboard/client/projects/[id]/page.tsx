import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { TaskList } from "@/components/dashboard/TaskList";
import { Task } from "@/types";

const mockTasks: Task[] = [
  { id: "1", projectId: "p1", title: "Homepage design", status: "done" },
  { id: "2", projectId: "p1", title: "About page", status: "done" },
  { id: "3", projectId: "p1", title: "Contact form", status: "in_progress" },
  { id: "4", projectId: "p1", title: "Blog", status: "todo" },
];

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName="Client Demo" />
        <main className="p-4 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Corporate Website Redesign</h1>
            <Badge status="in_progress" />
          </div>

          <Card>
            <h3 className="font-semibold mb-3">Timeline</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>May 01, 2026 — Project kicked off</li>
              <li>May 20, 2026 — Homepage design approved</li>
              <li>Jun 10, 2026 — Development started</li>
              <li>Today — Contact form in progress</li>
            </ul>
          </Card>

          <TaskList tasks={mockTasks} />

          <Card>
            <h3 className="font-semibold mb-3">Feedback</h3>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm">Approve</button>
              <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm">Request Revision</button>
            </div>
          </Card>

          <p className="text-xs text-gray-400">Project ID: {params.id}</p>
        </main>
      </div>
    </div>
  );
}
