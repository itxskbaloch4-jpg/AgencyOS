"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const supabase = createClient();

  async function handleRegister(e: React.FormEvent) {
  e.preventDefault();
  const supabase = createClient();
  const { error } = await supabase.auth.signUp({
    email: form.email,
    password: form.password,
    options: {
      data: { full_name: form.name, role: "client" },
      emailRedirectTo: `${window.location.origin}/auth/callback`,
    },
  });
  setMessage(error ? error.message : "Check your email to confirm your account.");
}

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleRegister} className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold text-center mb-6">Create your account</h1>
        {message && <p className="text-sm text-brand-600">{message}</p>}
        <input placeholder="Full name" required className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" required className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" required className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <Button type="submit" className="w-full">Create Account</Button>
      </form>
    </main>
  );
}
