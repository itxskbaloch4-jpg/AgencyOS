import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { Mail } from "lucide-react";

interface Member {
  id: string;
  name: string;
  role: string;
  email: string;
}

const team: Member[] = [
  { id: "1", name: "Ayesha Khan", role: "Project Manager", email: "ayesha@agencyos.com" },
  { id: "2", name: "SK Baloch", role: "Frontend Developer", email: "sk@agencyos.com" },
  { id: "3", name: "Daniyal Ahmed", role: "UI/UX Designer", email: "daniyal@agencyos.com" },
];

export default function TeamPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName="Client Demo" />
        <main className="p-4 md:p-6">
          <h1 className="text-xl font-bold mb-4">Your Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {team.map((member) => (
              <Card key={member.id}>
                <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold mb-3">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-sm">{member.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{member.role}</p>
                <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-xs text-brand-600 hover:underline">
                  <Mail size={14} /> {member.email}
                </a>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
