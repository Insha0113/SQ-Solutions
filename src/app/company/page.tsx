import type { Metadata } from "next";
import { Building2, BookOpen, Target, Star, Brain, Users, Rocket, Mail } from "lucide-react";
import { LabPageHero } from "@/components/lab/LabPage";
import { LabTiles } from "@/components/lab/LabTiles";

export const metadata: Metadata = {
  title: "Company",
  description: "An AI-first technology company built to solve real business problems.",
};

const ITEMS = [
  { title: "About Squadify", desc: "Learn who we are and what drives us.", href: "/company/about", Icon: Building2 },
  { title: "Our Story", desc: "How Squadify Solutions was founded.", href: "/company/story", Icon: BookOpen },
  { title: "Mission & Vision", desc: "Our purpose and long-term goals.", href: "/company/mission", Icon: Target },
  { title: "Why Squadify", desc: "What makes us different from the rest.", href: "/company/why-squadify", Icon: Star },
  { title: "Our AI-First Approach", desc: "How we think about solving problems.", href: "/company/ai-approach", Icon: Brain },
  { title: "Leadership", desc: "Meet the team driving Squadify.", href: "/company/leadership", Icon: Users },
  { title: "Careers", desc: "Join our growing AI-first team.", href: "/company/careers", Icon: Rocket },
  { title: "Contact", desc: "Get in touch with our team.", href: "/contact", Icon: Mail },
];

export default function CompanyPage() {
  return (
    <>
      <LabPageHero eyebrow="Company" title="About" accent="Squadify Solutions">
        An AI-first technology company built to solve real business problems.
      </LabPageHero>
      <section className="lab-section">
        <div className="container">
          <LabTiles items={ITEMS} cta="Learn More" />
        </div>
      </section>
    </>
  );
}
