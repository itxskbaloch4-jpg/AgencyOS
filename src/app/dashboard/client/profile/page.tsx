"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Camera } from "lucide-react";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "Client Demo",
    company: "Rossi Design Studio",
    email: "client@demo.com",
    phone: "+92 300 1234567",
    bio: "Marketing lead overseeing our website redesign project.",
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName="Client Demo" />
        <main className="p-4 md:p-6">
          <h1 className="text-xl font-bold mb-4">Profile</h1>
          <Card className="max-w-lg space-y-5">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xl font-bold">
                  {profile.name.charAt(0)}
                </div>
                <button
                  aria-label="Change photo"
                  className="absolute -bottom-1 -right-1 bg-brand-600 text-white rounded-full p-1.5"
                >
                  <Camera size={12} />
                </button>
              </div>
              <div>
                <p className="font-semibold">{profile.name}</p>
                <p className="text-xs text-gray-500">{profile.company}</p>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Full Name</label>
              <input
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Company</label>
              <input
                value={profile.company}
                onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Email</label>
              <input
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Phone</label>
              <input
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Bio</label>
              <textarea
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                rows={3}
                className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700"
              />
            </div>

            <Button>Save Profile</Button>
          </Card>
        </main>
      </div>
    </div>
  );
}
