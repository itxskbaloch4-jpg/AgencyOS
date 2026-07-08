"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const supabase = createClient();

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    await supabase.auth.resetPasswordForEmail(email);
    setSent(true);
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleReset} className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold text-center mb-6">Reset your password</h1>
        {sent ? (
          <p className="text-sm text-brand-600">Reset link sent — check your inbox.</p>
        ) : (
          <>
            <input type="email" placeholder="Email" required value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-900 dark:border-gray-700" />
            <Button type="submit" className="w-full">Send Reset Link</Button>
          </>
        )}
      </form>
    </main>
  );
}
