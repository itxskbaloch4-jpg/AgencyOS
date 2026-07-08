import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-brand-600 mb-2">404</h1>
      <p className="text-gray-500 mb-6">This page doesn't exist or has been moved.</p>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </main>
  );
}
