import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./lab-hero.css";
import "./lab-ui.css";
import "./lab-neural.css";
import "./lab-services.css";
import "./lab-workspace.css";
import "./lab-process.css";
import "./lab-connect.css";
import "./lab-home.css";
import "./lab-inner.css";
import "./lab-assistant.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AssistantLauncher from "@/components/assistant/AssistantLauncher";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AssistantLauncher />
      </body>
    </html>
  );
}
