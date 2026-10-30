export interface Stage {
  num: string;
  title: string;
  desc: string;
  deliverables: string[];
}

/** The 150-hour framework stages (content carried over verbatim from the previous delivery section). */
export const STAGES: Stage[] = [
  {
    num: "01",
    title: "Understand",
    desc: "We identify your business pain points, existing workflows, goals, and constraints through a structured discovery session.",
    deliverables: ["Pain point mapping", "Process audit", "AI opportunity matrix"],
  },
  {
    num: "02",
    title: "Design",
    desc: "We define the solution architecture, UX, integrations, and implementation plan — nothing is built until the design is agreed.",
    deliverables: ["Solution blueprint", "Integration plan", "Scope agreement"],
  },
  {
    num: "03",
    title: "Build",
    desc: "We develop the agreed functionality, integrate with your existing systems, and maintain continuous communication throughout.",
    deliverables: ["Working AI system", "Integration tests", "Progress reports"],
  },
  {
    num: "04",
    title: "Launch",
    desc: "We test, deploy, and validate the solution — then prepare your team to use it confidently from day one.",
    deliverables: ["Live deployment", "Team training", "Documentation"],
  },
  {
    num: "05",
    title: "Scale",
    desc: "We monitor performance, provide agreed support, and identify opportunities to extend and improve as your business evolves.",
    deliverables: ["Performance review", "Optimisation", "Roadmap planning"],
  },
];
