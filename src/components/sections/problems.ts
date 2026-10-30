/**
 * Business problems shown in Scene 02. Copy and links carried over verbatim
 * from the previous "Problems We Solve" section.
 *
 * `dir` is where the problem's anchor sits on the brain, expressed in VIEW
 * space for the Scene 02 camera pose (x right, y up, z toward the viewer).
 * Left-column problems sit on the left of the brain, right-column on the right,
 * ordered top to bottom so leader lines never cross.
 */
export interface Problem {
  num: string;
  title: string;
  desc: string;
  href: string;
  side: "left" | "right";
  dir: [number, number, number];
}

export const PROBLEMS: Problem[] = [
  {
    num: "01",
    title: "Manual & Repetitive Work",
    desc: "Staff spending hours on tasks that should be automated — data entry, approvals, scheduling.",
    href: "/solutions/knowledge-management",
    side: "left",
    dir: [-0.35, 0.8, 0.5],
  },
  {
    num: "02",
    title: "High Operational Costs",
    desc: "Inefficient processes driving up overheads. AI dramatically cuts the cost of repetitive workflows.",
    href: "/services/ai-automation",
    side: "left",
    dir: [-0.75, 0.42, 0.5],
  },
  {
    num: "03",
    title: "Slow Customer Support",
    desc: "Long response times and high ticket volumes damaging satisfaction and team morale.",
    href: "/solutions/customer-support",
    side: "left",
    dir: [-0.85, 0.0, 0.5],
  },
  {
    num: "04",
    title: "Poor Lead Follow-up",
    desc: "Prospects falling through the cracks because follow-up is delayed or inconsistent.",
    href: "/solutions/sales-automation",
    side: "left",
    dir: [-0.6, -0.45, 0.6],
  },
  {
    num: "05",
    title: "Document & Email Overload",
    desc: "Hours lost extracting data from documents and emails that AI could process in seconds.",
    href: "/solutions/document-intelligence",
    side: "right",
    dir: [0.35, 0.8, 0.5],
  },
  {
    num: "06",
    title: "Reporting Bottlenecks",
    desc: "Business decisions delayed because reports take days to compile from disconnected systems.",
    href: "/solutions/analytics",
    side: "right",
    dir: [0.8, 0.4, 0.45],
  },
  {
    num: "07",
    title: "Data Silos",
    desc: "Critical business data locked in separate systems — no unified view for decision-makers.",
    href: "/services/ai-integration",
    side: "right",
    dir: [0.85, -0.05, 0.5],
  },
  {
    num: "08",
    title: "Approval Delays",
    desc: "Slow internal approval workflows stalling projects, purchases, and daily operations.",
    href: "/services/ai-automation",
    side: "right",
    dir: [0.6, -0.5, 0.6],
  },
];
