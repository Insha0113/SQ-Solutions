This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> On Windows, the project folder name contains `^`, which `cmd.exe` treats as an
> escape character, so `npm run …` fails to find Next. Run the binaries
> directly instead: `node node_modules/next/dist/bin/next dev` (or `build` / `start`).

## Configuration

Copy `.env.example` to `.env.local`. Nothing below is required to build or run
the site; each feature reports clearly when it is not configured.

### Lead capture

All enquiry forms (`/contact`, `/contact/consultation`, `/contact/discovery-call`,
`/contact/request-solution`) and the chat assistant post to `POST /api/leads`
(`src/app/api/leads/route.ts`, `src/lib/leads.ts`). The endpoint:

- accepts same-origin JSON only (16 KB max) and rate-limits 5 enquiries per
  10 minutes per IP (in memory, per server instance; add your host's WAF/rate
  limiting on serverless platforms);
- validates and sanitises fields, requires explicit consent (the consent text and
  timestamp travel with the lead), and drops bots via a honeypot field and a
  minimum fill time;
- delivers to `LEAD_WEBHOOK_URL` and/or Resend email (`RESEND_API_KEY`,
  `LEAD_NOTIFY_EMAIL`, `LEAD_FROM_EMAIL`), and succeeds if at least one accepts.

**There is no database.** Leads are not stored by the site itself; the webhook or
inbox is the system of record. With no destination configured the API answers
`503 not_configured` and the form offers a pre-filled email to
hello@squadifysolutions.com instead. Review the Privacy Policy page so it describes
the destination you choose.

### Site assistant

The chat launcher appears on every page; an invitation shows 10 seconds after a
visitor's first page view in a session (not on `/contact` or `/get-started`
pages, once per session, dismissible). Answers come only from
`src/lib/assistant/knowledge.ts`, which is built from the site's own copy.
Update it when page content changes. Setting `ANTHROPIC_API_KEY` switches
answers to Claude via `/api/chat`, grounded in the same knowledge base, with
links filtered to pages the knowledge base cites; the local answers remain the
fallback.

### 3D performance tiers

`src/lib/device-tier.ts` picks `low` / `mid` / `high`. Append `?tier=low|mid|high`
to any URL to force a tier while testing. On phones and small tablets the low tier
also caps rendering at 30 fps and drops off-screen lab geometry
(`compactSettings`).

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
