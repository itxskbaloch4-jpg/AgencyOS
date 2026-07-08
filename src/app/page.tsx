import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto w-full">
        <span className="text-xl font-bold text-brand-600">AgencyOS</span>
        <div className="flex gap-3">
          <Link href="/login"><Button variant="ghost">Log in</Button></Link>
          <Link href="/register"><Button>Get Started</Button></Link>
        </div>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 animate-fadeUp">
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
          One portal for your agency and every client.
        </h1>
        <p className="mt-6 text-gray-500 max-w-xl">
          Projects, tasks, files, invoices and messages — all in one clean dashboard.
          Stop chasing email threads.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/register"><Button>Start Free</Button></Link>
          <Link href="/login"><Button variant="secondary">View Demo</Button></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
