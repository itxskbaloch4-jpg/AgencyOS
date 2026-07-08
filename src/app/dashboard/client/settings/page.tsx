"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function SettingsPage() {
  const [form, setForm] = useState({ name: "Client Demo", email: "client@demo.com" });

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName="Client Demo" />
        <main className="p-4 md:p-6">
          <h1 className="text-xl font-bold mb-4">Settings</h1>
          <Card className="max-w-md space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1">Full Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Email</label>
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700"
              />
            </div>
            <Button>Save Changes</Button>
          </Card>
        </main>
      </div>
    </div>
  );
}
