import { Task } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <Card>
      <h3 className="font-semibold mb-4">Tasks</h3>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between text-sm">
            <span>{task.title}</span>
            <Badge status={task.status} />
          </li>
        ))}
      </ul>
    </Card>
  );
}
