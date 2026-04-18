"use client";

import { motion } from "framer-motion";
import { Shield, Cloud, Lock, CheckCircle2, Server } from "lucide-react";

const badges = [
  { icon: Shield, label: "FedRAMP High", sub: "AWS GovCloud authorized" },
  { icon: Lock, label: "DoD IL4 / IL5", sub: "Via Amazon Bedrock" },
  { icon: Cloud, label: "AWS GovCloud", sub: "US-East & US-West" },
  { icon: Server, label: "CAGE 55L75", sub: "UEI PS3WAHDBWMQ8" },
];

const stack = [
  { label: "Amazon Bedrock", detail: "Claude 3.5/3.7 Sonnet · Llama 3" },
  { label: "Bedrock Knowledge Bases", detail: "Managed RAG · IL5 authorized" },
  { label: "S3 + Lambda + DynamoDB", detail: "FedRAMP High GovCloud" },
  { label: "Streaming Voice", detail: "Rust/Python Lambda backends" },
  { label: "CMMC Level 2", detail: "Self-attestation in progress" },
  { label: "SAM.gov Registered", detail: "Active small business vendor" },
];

export function Credentials() {
  return (
    <section id="credentials" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">
              Government Ready
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Built for secure
              <br />
              government environments.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Our entire AI stack runs on FedRAMP-authorized infrastructure.
              No compromises on security, no workarounds.
            </p>
          </motion.div>

          {/* Credential badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {badges.map((b) => (
              <div
                key={b.label}
                className="bg-card border border-border rounded-xl p-5 flex flex-col items-center text-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{b.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{b.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-center text-xs text-muted-foreground/60 uppercase tracking-widest mb-5 font-medium">
              Authorized Technology Stack
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {stack.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium">{item.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
