import type { Metadata } from "next";
import LabHero from "@/components/hero/LabHero";
import LabJourney from "@/components/laboratory/LabJourney";
import NeuralSystem from "@/components/sections/NeuralSystem";
import ServicesScene from "@/components/sections/ServicesScene";
import WorkspaceScene from "@/components/sections/WorkspaceScene";
import ProcessScene from "@/components/sections/ProcessScene";
import IndustriesSection from "@/components/home/IndustriesSection";
import WhySquadify from "@/components/home/WhySquadify";
import CaseStudies from "@/components/home/CaseStudies";
import TechEcosystem from "@/components/home/TechEcosystem";
import TrustedPartners from "@/components/home/TrustedPartners";
import BlogSection from "@/components/home/BlogSection";
import ConnectScene from "@/components/sections/ConnectScene";

export const metadata: Metadata = {
  title: "Squadify Solutions — AI-Powered Business Transformation",
  description:
    "Squadify Solutions helps businesses identify operational challenges and turn them into practical, cost-effective AI solutions — from intelligent automation to custom AI applications.",
};

export default function HomePage() {
  return (
    <>
      <LabJourney>
        <LabHero />
        <NeuralSystem />
        <ServicesScene />
      </LabJourney>
      <WorkspaceScene />
      <ProcessScene />
      <IndustriesSection />
      <WhySquadify />
      <CaseStudies />
      <TechEcosystem />
      <TrustedPartners />
      <BlogSection />
      <ConnectScene />
    </>
  );
}
