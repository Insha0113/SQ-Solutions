import type { ReactNode } from "react";

export interface DocSection {
  id: string;
  title: string;
  body: ReactNode;
}

/**
 * Lab "document reader" for policy pages: a contents rail with anchor links
 * beside a ruled document panel. Server-rendered, no script.
 */
export function LabDocument({ updated, sections }: { updated: string; sections: DocSection[] }) {
  return (
    <section className="lab-section">
      <div className="container lab-doc">
        <nav className="lab-doc__toc" aria-label="On this page">
          <p className="lab-doc__toc-label">Contents</p>
          <ol>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>
        <article className="lab-doc__body">
          <span className="holo-panel__corner holo-panel__corner--tl" aria-hidden="true" />
          <span className="holo-panel__corner holo-panel__corner--br" aria-hidden="true" />
          <p className="lab-doc__updated">{updated}</p>
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="lab-doc__section" aria-labelledby={`${s.id}-h`}>
              <h2 id={`${s.id}-h`} className="lab-doc__h">
                {s.title}
              </h2>
              <div className="lab-doc__p">{s.body}</div>
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}

/** Turns a heading into a URL fragment. */
export const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
