import type { Metadata } from "next";
import LabHero from "@/components/hero/LabHero";
import LabJourney from "@/components/laboratory/LabJourney";
import NeuralSystem from "@/components/sections/NeuralSystem";
import ServicesScene from "@/components/sections/ServicesScene";
import WorkspaceScene from "@/components/sections/WorkspaceScene";
import ProcessScene from "@/components/sections/ProcessScene";
import IndustriesMatrix from "@/components/sections/IndustriesMatrix";
import WhyProtocol from "@/components/sections/WhyProtocol";
import CaseFiles from "@/components/sections/CaseFiles";
import StackDiagram from "@/components/sections/StackDiagram";
import PartnerTicker from "@/components/sections/PartnerTicker";
import ResearchLog from "@/components/sections/ResearchLog";
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
      <IndustriesMatrix />
      <WhyProtocol />
      <CaseFiles />
      <StackDiagram />
      <PartnerTicker />
      <ResearchLog />
      <ConnectScene />
    </>
  );
}
