import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Termination Risk Scanner",
  description: "Scan your business for Stripe account termination risks. AI-powered analysis of transaction patterns, compliance factors, and business model to protect your revenue."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="95e04469-f416-4e1f-8f8b-0e337843d65a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
