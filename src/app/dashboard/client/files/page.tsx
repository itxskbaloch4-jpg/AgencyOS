"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { UploadCloud, FileText, Download } from "lucide-react";

interface FileItem {
  id: string;
  name: string;
  type: string;
  uploadedBy: "client" | "agency";
  date: string;
}

const mockFiles: FileItem[] = [
  { id: "1", name: "brand-guidelines.pdf", type: "PDF", uploadedBy: "client", date: "Jun 12, 2026" },
  { id: "2", name: "logo-final.png", type: "Image", uploadedBy: "client", date: "Jun 10, 2026" },
  { id: "3", name: "homepage-mockup-v2.fig", type: "Design", uploadedBy: "agency", date: "Jun 18, 2026" },
];

export default function FilesPage() {
  const [files] = useState(mockFiles);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName="Client Demo" />
        <main className="p-4 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Files</h1>
            <Button className="flex items-center gap-2">
              <UploadCloud size={16} /> Upload
            </Button>
          </div>

          <Card>
            <div className="space-y-2">
              {files.map((file) => (
                <div key={file.id} className="flex items-center justify-between py-2 border-b last:border-0 border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-brand-600" />
                    <div>
                      <p className="text-sm font-medium">{file.name}</p>
                      <p className="text-xs text-gray-500">
                        {file.type} • Uploaded by {file.uploadedBy} • {file.date}
                      </p>
                    </div>
                  </div>
                  <button aria-label="Download">
                    <Download size={16} className="text-gray-500 hover:text-brand-600" />
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}
