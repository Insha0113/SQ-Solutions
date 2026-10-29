import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Squadify Solutions — AI-Powered Business Transformation",
    template: "%s | Squadify Solutions",
  },
  description:
    "Squadify Solutions helps businesses identify operational challenges and turn them into practical, cost-effective AI solutions. From intelligent automation to custom AI applications — built in 150 hours.",
  keywords: [
    "AI consulting",
    "AI automation",
    "AI solutions",
    "AI development",
    "workflow automation",
    "AI agents",
    "custom AI software",
    "business automation",
    "digital transformation",
  ],
  openGraph: {
    type: "website",
    siteName: "Squadify Solutions",
    title: "Squadify Solutions — AI-Powered Business Transformation",
    description:
      "Practical, cost-effective AI solutions built around your business needs. From problem to live AI solution — structured delivery.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
