import { ReactNode } from "react";

/**
 * Shared chrome for the legal pages (/privacy, /terms).
 *
 * These pages are load-bearing for A2P 10DLC campaign registration: carrier
 * reviewers fetch the brand's registered website and verify that a privacy
 * policy and terms of service exist, are reachable, and contain the required
 * messaging disclosures. Keep them linked from the footer and publicly
 * crawlable — a page behind a redirect or a JS-only route can fail review.
 */

export function LegalPage({
  title,
  effective,
  children,
}: {
  title: string;
  effective: string;
  children: ReactNode;
}) {
  return (
    <div className="container mx-auto px-6 py-20 max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Effective {effective}
      </p>
      <div className="mt-10 space-y-10">{children}</div>
      <p className="mt-16 pt-8 border-t border-border text-xs text-muted-foreground">
        Asset Foundry Inc. · Lake Worth, FL · CAGE 55L75 · UEI PS3WAHDBWMQ8
      </p>
    </div>
  );
}

export function Section({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight">{heading}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-muted/50 p-4 text-sm leading-relaxed text-foreground">
      {children}
    </div>
  );
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
