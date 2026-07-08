"use client";

import { Card } from "@/components/ui/Card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { month: "Jan", projects: 3 },
  { month: "Feb", projects: 5 },
  { month: "Mar", projects: 4 },
  { month: "Apr", projects: 7 },
];

export function AnalyticsChart() {
  return (
    <Card>
      <h3 className="font-semibold mb-4">Projects Overview</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data}>
          <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip />
          <Bar dataKey="projects" fill="#4f46e5" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
