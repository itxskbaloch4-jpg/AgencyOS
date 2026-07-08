import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { Project } from "@/types";

const mockProjects: Project[] = [
  { id: "p1", name: "Corporate Website Redesign", clientId: "c1", status: "in_progress", progress: 65, deliveryDate: "Aug 15, 2026", createdAt: "2026-05-01" },
  { id: "p2", name: "E-commerce Store", clientId: "c1", status: "review", progress: 90, deliveryDate: "Jul 20, 2026", createdAt: "2026-04-10" },
  { id: "p3", name: "Brand Landing Page", clientId: "c1", status: "completed", progress: 100, deliveryDate: "Jun 01, 2026", createdAt: "2026-03-01" },
];

export default function ClientProjectsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName="Client Demo" />
        <main className="p-4 md:p-6">
          <h1 className="text-xl font-bold mb-4">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockProjects.map((project) => (
              <Link key={project.id} href={`/dashboard/client/projects/${project.id}`}>
                <Card className="hover:border-brand-500 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-sm">{project.name}</h3>
                    <Badge status={project.status} />
                  </div>
                  <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-brand-600 rounded-full" style={{ width: `${project.progress}%` }} />
                  </div>
                  <p className="text-xs text-gray-500">{project.progress}% complete • Due {project.deliveryDate}</p>
                </Card>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
