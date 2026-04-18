import Link from "next/link";
import { Zap } from "lucide-react";

const links = {
  Services: [
    { label: "AI Process Automation", href: "#services" },
    { label: "Voice Agents", href: "#services" },
    { label: "Agentic Workflows", href: "#services" },
  ],
  Company: [
    { label: "Capabilities", href: "#credentials" },
    { label: "Why Us", href: "#why" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">Asset Foundry</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Production AI for government and enterprise.
              Lake Worth, FL · FedRAMP IL5 · AWS GovCloud.
            </p>
            <div className="flex flex-wrap gap-2">
              {["CAGE: 55L75", "UEI: PS3WAHDBWMQ8", "SAM.gov Registered"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-2.5 py-1 rounded-md bg-muted border border-border text-muted-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-sm font-semibold mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Asset Foundry Inc. All rights reserved.</span>
          <span>Lake Worth, FL · U.S. Government Approved Vendor</span>
        </div>
      </div>
    </footer>
  );
}
