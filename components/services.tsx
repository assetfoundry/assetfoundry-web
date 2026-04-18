"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Mic2,
  Bot,
  FileText,
  BarChart3,
  Clock,
  Radio,
  MessageSquare,
  GraduationCap,
  Network,
  GitBranch,
  Repeat,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    badge: "Process AI",
    title: "AI Business Process Automation",
    description:
      "Eliminate manual workflows with intelligent automation that learns, adapts, and scales. Replace paper-based processes with AI systems that integrate directly into your existing platforms.",
    features: [
      { icon: FileText, text: "Intelligent document processing" },
      { icon: BarChart3, text: "Predictive analytics & reporting" },
      { icon: Clock, text: "End-to-end workflow automation" },
    ],
    tags: ["EMR/EHR Integration", "RPA", "Digital Transformation"],
  },
  {
    icon: Mic2,
    badge: "Voice AI",
    title: "Voice Agents",
    description:
      "Real-time conversational AI with natural spoken dialogue — for customer service, training, coaching, or operational guidance. Deployable in secure enclaves including DoD IL5.",
    features: [
      { icon: Radio, text: "Streaming speech architecture" },
      { icon: MessageSquare, text: "Adaptive real-time coaching" },
      { icon: GraduationCap, text: "Virtual instructor systems" },
    ],
    tags: ["Rust/Python Lambda", "AWS GovCloud", "IL5 Ready"],
  },
  {
    icon: Bot,
    badge: "Agentic AI",
    title: "Agentic Workflow Optimization",
    description:
      "Multi-step autonomous AI agents that reason, plan, and execute complex tasks without constant human direction — compressing weeks of work into hours.",
    features: [
      { icon: Network, text: "Multi-agent orchestration" },
      { icon: GitBranch, text: "RAG + tool-use pipelines" },
      { icon: Repeat, text: "Continuous self-improvement loops" },
    ],
    tags: ["Amazon Bedrock", "LLM Fine-tuning", "Claude / Llama 3"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">
            What We Build
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Three capabilities.
            <br />
            One focused team.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            We go deep on what matters — production AI systems delivered fast
            by a small, expert team.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="h-full border-border hover:border-primary/40 transition-colors duration-300">
                <CardHeader className="pb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="w-fit text-xs mb-2">
                    {service.badge}
                  </Badge>
                  <h3 className="text-lg font-bold leading-tight">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f.text} className="flex items-center gap-2.5 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">{f.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
