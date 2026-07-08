import { cn } from "@/lib/utils";

const styles: Record<string, string> = {
  done: "bg-green-100 text-green-700",
  in_progress: "bg-yellow-100 text-yellow-700",
  todo: "bg-gray-100 text-gray-700",
  overdue: "bg-red-100 text-red-700",
};

export function Badge({ status }: { status: string }) {
  return (
    <span className={cn("text-xs px-2 py-1 rounded-full font-medium", styles[status] ?? styles.todo)}>
      {status.replace("_", " ")}
    </span>
  );
}
