"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { MessageSquare, X } from "lucide-react";
import { chooseLayout, type InviteLayout } from "./invitePlacement";

// The panel, its knowledge base and the lead form load only when someone opens the chat.
const AssistantPanel = dynamic(() => import("./AssistantPanel"), { ssr: false, loading: () => null });

const INVITE_DELAY_MS = 10_000;
const KEY_LANDED = "sq-assist-landed";
const KEY_DISMISSED = "sq-assist-dismissed";
/** Set when the invitation has been shown: it appears once per session, dismissed or not. */
const KEY_SHOWN = "sq-assist-shown";

/** How often the invitation re-checks its space while visible (content in the 3D scenes moves). */
const RECHECK_MS = 700;

/** Pages where the visitor is already enquiring: no unprompted invitation there. */
const QUIET = /^\/(contact|get-started)(\/|$)/;

function session(key: string, value?: string) {
  try {
    if (value === undefined) return window.sessionStorage.getItem(key);
    window.sessionStorage.setItem(key, value);
  } catch {
    /* storage blocked: invitation simply shows per page load */
  }
  return null;
}

/**
 * Chat launcher shown on every page. Ten seconds after a visitor lands
 * (measured from their first page this session) a short invitation appears
 * beside it, once per session. It takes the largest form that covers nothing
 * important (see invitePlacement.ts) and adapts as the visitor scrolls.
 */
export default function AssistantLauncher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [invite, setInvite] = useState(false);
  const [layout, setLayout] = useState<InviteLayout>("badge");
  const launcherRef = useRef<HTMLButtonElement>(null);
  const inviteRef = useRef<HTMLDivElement>(null);
  /** Last measured size of each form; estimates until it has rendered once. */
  const sizes = useRef({ card: { width: 320, height: 190 }, pill: { width: 300, height: 52 } });

  useEffect(() => {
    if (session(KEY_DISMISSED) || session(KEY_SHOWN) || QUIET.test(pathname)) return;
    const now = Date.now();
    // Landing = navigation start of the first page this session, not hydration time.
    const landed = Number(session(KEY_LANDED)) || Math.round(performance.timeOrigin) || now;
    session(KEY_LANDED, String(landed));
    const t = window.setTimeout(() => {
      session(KEY_SHOWN, "1");
      setInvite(true);
    }, Math.max(0, landed + INVITE_DELAY_MS - now));
    return () => {
      window.clearTimeout(t);
      setInvite(false);
    };
  }, [pathname]);

  // Pick (and keep re-picking) a layout that covers nothing important.
  useEffect(() => {
    if (!invite || open) return;
    if (window.matchMedia("(max-width: 639px)").matches) sizes.current.card.height = 140;
    let pending: InviteLayout | null = null;
    let current: InviteLayout | null = null;
    let raf = 0;
    const rank = { badge: 0, pill: 1, card: 2 } as const;
    const check = () => {
      raf = 0;
      const launcher = launcherRef.current;
      if (!launcher) return;
      const next = chooseLayout(launcher.getBoundingClientRect(), sizes.current.card, sizes.current.pill);
      // Shrink at once when something would be covered; grow only once the space stays free.
      if (current === null || rank[next] < rank[current] || pending === next) {
        current = next;
        pending = null;
        setLayout(next);
      } else if (next !== current) {
        pending = next;
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    check();
    const timer = window.setInterval(schedule, RECHECK_MS);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [invite, open]);

  // Remember the real size of whichever form is showing, for the next placement check.
  useEffect(() => {
    const el = inviteRef.current;
    if (!el || (layout !== "card" && layout !== "pill")) return;
    const r = el.getBoundingClientRect();
    sizes.current[layout] = { width: r.width, height: r.height };
  }, [layout, invite]);

  const dismissInvite = () => {
    setInvite(false);
    session(KEY_DISMISSED, "1");
  };

  const openPanel = () => {
    setLoaded(true);
    setOpen(true);
    dismissInvite();
  };

  const closePanel = useCallback(() => {
    setOpen(false);
    launcherRef.current?.focus();
  }, []);

  return (
    <div className="assist" data-open={open || undefined}>
      {invite && !open && layout === "pill" ? (
        <div ref={inviteRef} className="assist-invite assist-invite--pill" role="status">
          <button type="button" className="assist-invite__pill-cta" onClick={openPanel}>
            <span className="assist-invite__led" aria-hidden="true" />
            Questions about AI? Ask us
          </button>
          <button type="button" className="assist-invite__close" aria-label="Dismiss chat invitation" onClick={dismissInvite}>
            <X className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      ) : null}
      {invite && !open && layout === "badge" ? (
        <span className="sr-only" role="status">
          Have a question about AI for your business? The chat assistant can help.
        </span>
      ) : null}
      {invite && !open && layout === "card" ? (
        <div ref={inviteRef} className="assist-invite" role="status">
          <button type="button" className="assist-invite__close" aria-label="Dismiss chat invitation" onClick={dismissInvite}>
            <X className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
          <p className="assist-invite__kicker">
            <span className="assist-invite__led" aria-hidden="true" /> Squadify Assistant
          </p>
          <p className="assist-invite__text">
            Have a question about AI for your business?
            <span className="assist-invite__more"> I can explain our services, the 150-hour framework and how to get started.</span>
          </p>
          <button type="button" className="assist-invite__cta" onClick={openPanel}>
            Ask a question
          </button>
        </div>
      ) : null}

      {loaded ? <AssistantPanel open={open} onClose={closePanel} /> : null}

      <button
        ref={launcherRef}
        type="button"
        className="assist-launcher"
        data-attention={(invite && !open && layout === "badge") || undefined}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={open}
        aria-controls="assist-panel"
        onClick={() => (open ? closePanel() : openPanel())}
      >
        {open ? <X className="w-5 h-5" aria-hidden="true" /> : <MessageSquare className="w-5 h-5" aria-hidden="true" />}
      </button>
    </div>
  );
}
