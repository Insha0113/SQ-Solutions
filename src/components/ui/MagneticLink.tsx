"use client";

import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { ReactNode, PointerEvent } from "react";

const MotionLink = motion.create(Link);

interface MagneticLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  /** Max pull in px. */
  strength?: number;
}

/** A link that leans slightly toward a fine pointer. Inert for touch and reduced motion. */
export default function MagneticLink({ href, className, children, strength = 6 }: MagneticLinkProps) {
  const reduced = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (reduced || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width - 0.5) * 2 * strength);
    y.set(((e.clientY - r.top) / r.height - 0.5) * 2 * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <MotionLink href={href} className={className} style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </MotionLink>
  );
}
