import type { Metadata } from "next";
import LabHero from "@/components/hero/LabHero";
import ProblemsSection from "@/components/home/ProblemsSection";
import ServicesSection from "@/components/home/ServicesSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import DeliveryFramework from "@/components/home/DeliveryFramework";
import IndustriesSection from "@/components/home/IndustriesSection";
import WhySquadify from "@/components/home/WhySquadify";
import CaseStudies from "@/components/home/CaseStudies";
import TechEcosystem from "@/components/home/TechEcosystem";
import TrustedPartners from "@/components/home/TrustedPartners";
import BlogSection from "@/components/home/BlogSection";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Squadify Solutions — AI-Powered Business Transformation",
  description:
    "Squadify Solutions helps businesses identify operational challenges and turn them into practical, cost-effective AI solutions — from intelligent automation to custom AI applications.",
};

export default function HomePage() {
  return (
    <>
      <LabHero />
      <ProblemsSection />
      <ServicesSection />
      <SolutionsSection />
      <DeliveryFramework />
      <IndustriesSection />
      <WhySquadify />
      <CaseStudies />
      <TechEcosystem />
      <TrustedPartners />
      <BlogSection />
      <ContactCTA />
    </>
  );
}
