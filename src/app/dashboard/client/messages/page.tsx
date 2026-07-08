"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: "client" | "agency";
  text: string;
  time: string;
}

const initialMessages: Message[] = [
  { id: "1", sender: "agency", text: "Hi! The homepage design is ready for review.", time: "10:02 AM" },
  { id: "2", sender: "client", text: "Looks great, just one small color change please.", time: "10:15 AM" },
  { id: "3", sender: "agency", text: "Updated! Please check again.", time: "11:00 AM" },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now().toString(), sender: "client", text: input, time: "Now" }]);
    setInput("");
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName="Client Demo" />
        <main className="p-4 md:p-6">
          <h1 className="text-xl font-bold mb-4">Messages</h1>
          <Card className="flex flex-col h-[70vh]">
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex", msg.sender === "client" ? "justify-end" : "justify-start")}>
                  <div className={cn(
                    "max-w-xs px-4 py-2 rounded-2xl text-sm",
                    msg.sender === "client" ? "bg-brand-600 text-white" : "bg-gray-100 dark:bg-gray-800"
                  )}>
                    <p>{msg.text}</p>
                    <p className="text-[10px] opacity-70 mt-1">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700"
              />
              <Button onClick={sendMessage}>Send</Button>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}
