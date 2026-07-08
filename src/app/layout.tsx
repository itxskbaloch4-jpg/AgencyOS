import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://agencyos.vercel.app"),
  title: {
    default: "AgencyOS — Client Portal & Project Management for Agencies",
    template: "%s | AgencyOS",
  },
  description:
    "AgencyOS is a client portal SaaS built for web agencies — manage projects, tasks, invoices, files and client communication in one dashboard.",
  keywords: ["client portal", "agency dashboard", "project management SaaS", "AgencyOS"],
  openGraph: {
    title: "AgencyOS — Client Portal for Web Agencies",
    description: "Manage clients, projects, invoices and communication in one place.",
    url: "https://agencyos.vercel.app",
    siteName: "AgencyOS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgencyOS — Client Portal for Web Agencies",
    description: "Manage clients, projects, invoices and communication in one place.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
