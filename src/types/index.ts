export type UserRole = "admin" | "client";

export interface Project {
  id: string;
  name: string;
  clientId: string;
  status: "planning" | "in_progress" | "review" | "completed";
  progress: number;
  deliveryDate: string;
  createdAt: string;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  status: "todo" | "in_progress" | "done";
}

export interface Invoice {
  id: string;
  projectId: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
  pdfUrl?: string;
}
