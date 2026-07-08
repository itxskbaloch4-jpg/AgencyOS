"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Video } from "lucide-react";

interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  link: string;
}

const mockMeetings: Meeting[] = [
  { id: "1", title: "Homepage design review", date: "Jul 12, 2026", time: "3:00 PM", link: "https://meet.google.com/abc-defg-hij" },
  { id: "2", title: "Sprint planning", date: "Jul 15, 2026", time: "11:00 AM", link: "https://zoom.us/j/123456789" },
];

export default function CalendarPage() {
  const [meetings] = useState(mockMeetings);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName="Client Demo" />
        <main className="p-4 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Calendar</h1>
            <Button>Schedule Meeting</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {meetings.map((m) => (
              <Card key={m.id}>
                <h3 className="font-semibold text-sm mb-1">{m.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{m.date} • {m.time}</p>
                <a href={m.link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline">
                  <Video size={16} /> Join Meeting
                </a>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
