/**
 * Where the chat invitation can sit without covering anything important.
 *
 * The cinematic scenes move content around the screen (problem labels,
 * service clusters, the narration dock), so a fixed position cannot be right
 * everywhere. Instead each candidate layout is tested against the elements
 * it must never cover, and the least intrusive free one wins:
 *   card  — the full invitation above the launcher
 *   pill  — a one-line invitation beside the launcher
 *   badge — a dot on the launcher only (nothing free right now)
 */

export type InviteLayout = "card" | "pill" | "badge";

/** Navigation, primary calls to action, and the brain scenes' labels and panels. */
const PROTECTED = [
  "header",
  ".lab-hero__actions",
  ".lab-hero__hud",
  ".neural__item[data-revealed] .neural__label",
  ".neural__detail:not([hidden])",
  ".svc__node:not([data-hidden])",
  ".svc__detail:not([hidden])",
  ".nsteps__card",
  ".nsteps__dots",
  ".lab-btn",
  ".btn-primary",
  ".hs-cta",
].join(",");

const GAP = 12;
const MARGIN = 8;

interface Size {
  width: number;
  height: number;
}

const intersects = (a: DOMRect, b: DOMRect) =>
  a.left < b.right + MARGIN && a.right > b.left - MARGIN && a.top < b.bottom + MARGIN && a.bottom > b.top - MARGIN;

/**
 * The 3D brain's screen area while its stage is in view. A full-screen stage
 * (wide screens) keeps the brain and its constellation in the centre-right;
 * the short mobile stage is the brain's entirely.
 */
function brainZone(): DOMRect | null {
  const stage = document.querySelector(".lab-journey__stage");
  if (!stage) return null;
  const s = stage.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const top = Math.max(s.top, 0);
  const bottom = Math.min(s.bottom, vh);
  if (bottom - top < 40) return null;
  if (s.height >= vh * 0.9) {
    const zTop = Math.max(top, vh * 0.1);
    const zBottom = Math.min(bottom, vh * 0.84);
    return zBottom > zTop ? new DOMRect(vw * 0.38, zTop, vw * 0.56, zBottom - zTop) : null;
  }
  return new DOMRect(s.left, top, s.width, bottom - top);
}

function blockers() {
  const vh = window.innerHeight;
  const out: DOMRect[] = [];
  document.querySelectorAll(PROTECTED).forEach((el) => {
    if (el.closest(".assist")) return;
    const r = el.getBoundingClientRect();
    if (r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < vh) out.push(r);
  });
  const brain = brainZone();
  if (brain) out.push(brain);
  return out;
}

/** Card sits above the launcher, right-aligned; pill sits to its left, bottom-aligned. */
export function chooseLayout(launcher: DOMRect, card: Size, pill: Size): InviteLayout {
  const cardWidth = Math.min(card.width, window.innerWidth - 2 * 16);
  const cardRect = new DOMRect(launcher.right - cardWidth, launcher.top - GAP - card.height, cardWidth, card.height);
  const pillRect = new DOMRect(launcher.left - GAP - pill.width, launcher.bottom - pill.height, pill.width, pill.height);
  const taken = blockers();
  const free = (r: DOMRect) => r.left >= 0 && r.top >= 0 && !taken.some((b) => intersects(r, b));
  if (free(cardRect)) return "card";
  if (free(pillRect)) return "pill";
  return "badge";
}
