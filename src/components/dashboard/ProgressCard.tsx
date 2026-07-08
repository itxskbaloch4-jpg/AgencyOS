import { Card } from "@/components/ui/Card";

export function ProgressCard({ progress, status, deliveryDate }: { progress: number; status: string; deliveryDate: string }) {
  return (
    <Card>
      <p className="text-sm text-gray-500 mb-1">Project Progress</p>
      <div className="flex items-end gap-2 mb-3">
        <span className="text-3xl font-bold">{progress}%</span>
        <span className="text-sm text-gray-500 mb-1 capitalize">{status.replace("_", " ")}</span>
      </div>
      <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-brand-600 rounded-full transition-all" style={{ width: `${progress}%` }} />
      </div>
      <p className="text-xs text-gray-500 mt-3">Expected delivery: {deliveryDate}</p>
    </Card>
  );
}
