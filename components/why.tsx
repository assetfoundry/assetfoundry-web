"use client";

import { motion } from "framer-motion";
import { Rocket, Users, RefreshCw, Brain } from "lucide-react";

const points = [
  {
    icon: Rocket,
    title: "Weeks, not months",
    description:
      "Small expert teams move fast. We prototype to production in weeks — no enterprise bloat, no committee approvals.",
  },
  {
    icon: Brain,
    title: "Foundation model native",
    description:
      "We build on Claude, Llama 3, and AWS Bedrock — state-of-the-art models deployed securely inside your authorization boundary.",
  },
  {
    icon: Users,
    title: "Government & enterprise ready",
    description:
      "SAM.gov registered. AWS GovCloud infrastructure. We speak both DoD acquisition language and modern software engineering.",
  },
  {
    icon: RefreshCw,
    title: "Adaptive by design",
    description:
      "Our RAG-first architecture means your AI stays current as doctrine, policy, or data changes — no costly retraining required.",
  },
];

export function Why() {
  return (
    <section id="why" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">
              Why Asset Foundry
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Agile team.
              <br />
              Enterprise results.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We combine the speed of a startup with the rigor government and
              enterprise clients require — security, traceability, and
              compliance built in from day one.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-5 space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <point.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{point.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
