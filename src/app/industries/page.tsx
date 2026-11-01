import type { Metadata } from "next";
import {
  Factory,
  HeartPulse,
  ShoppingBag,
  ShoppingCart,
  Truck,
  Landmark,
  GraduationCap,
  HardHat,
  Hotel,
  Building,
  Scale,
  Rocket,
} from "lucide-react";
import { LabPageHero } from "@/components/lab/LabPage";
import { LabTiles, LabCta } from "@/components/lab/LabTiles";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "No matter your industry, we have the expertise to build AI solutions tailored to your specific challenges and growth opportunities.",
};

const INDUSTRIES = [
  { title: "Manufacturing", Icon: Factory, desc: "Equipment downtime, quality control, supply chain inefficiencies", href: "/industries/manufacturing" },
  { title: "Healthcare", Icon: HeartPulse, desc: "Patient scheduling, documentation, care coordination", href: "/industries/healthcare" },
  { title: "Retail", Icon: ShoppingBag, desc: "Inventory management, customer experience, demand forecasting", href: "/industries/retail" },
  { title: "E-commerce", Icon: ShoppingCart, desc: "Cart abandonment, personalization, customer support", href: "/industries/ecommerce" },
  { title: "Logistics", Icon: Truck, desc: "Route optimization, tracking, warehouse management", href: "/industries/logistics" },
  { title: "Finance", Icon: Landmark, desc: "Fraud detection, compliance, reporting automation", href: "/industries/finance" },
  { title: "Education", Icon: GraduationCap, desc: "Student engagement, administrative tasks, personalized learning", href: "/industries/education" },
  { title: "Construction", Icon: HardHat, desc: "Project management, safety compliance, resource planning", href: "/industries/construction" },
  { title: "Hospitality", Icon: Hotel, desc: "Guest experience, revenue management, operations", href: "/industries/hospitality" },
  { title: "Real Estate", Icon: Building, desc: "Lead qualification, property matching, tenant management", href: "/industries/real-estate" },
  { title: "Legal", Icon: Scale, desc: "Document review, contract analysis, compliance tracking", href: "/industries/legal" },
  { title: "Startups", Icon: Rocket, desc: "Growth automation, customer acquisition, product development", href: "/industries/startups" },
];

export default function IndustriesPage() {
  return (
    <>
      <LabPageHero eyebrow="Industries" title="AI Solutions for Every" accent="Industry">
        No matter your industry, we have the expertise to build AI solutions tailored to your specific challenges and
        growth opportunities.
      </LabPageHero>
      <section className="lab-section">
        <div className="container">
          <LabTiles items={INDUSTRIES} cta="View AI Solutions" />
        </div>
      </section>
      <LabCta title="Don't See Your Industry?" href="/contact" label="Talk to Our Team">
        We work across all industries. Tell us your specific business challenge and we&apos;ll build the right AI
        solution.
      </LabCta>
    </>
  );
}
