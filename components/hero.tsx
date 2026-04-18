"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight, Shield, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/hero/slide-1.jpg",
    badge: "AI Business Process Automation",
    headline: "Eliminate manual work.",
    sub: "Replace paper-based processes with intelligent automation that integrates directly into your existing platforms — EMR, ERP, and beyond.",
    cta: "See How It Works",
    ctaHref: "#services",
  },
  {
    image: "/hero/slide-2.jpg",
    badge: "Voice Agents",
    headline: "Real-time voice AI for training and ops.",
    sub: "Deployable virtual instructors with adaptive coaching, performance scoring, and DoD IL5 security — built on streaming LLM backends.",
    cta: "Explore Voice AI",
    ctaHref: "#services",
  },
  {
    image: "/hero/slide-3.jpg",
    badge: "Agentic Workflow Optimization",
    headline: "Autonomous agents that think and execute.",
    sub: "Multi-step AI workflows that reason, plan, and act — compressing weeks of complex work into hours without constant human direction.",
    cta: "View Capabilities",
    ctaHref: "#services",
  },
];

const INTERVAL = 6000;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setProgress(0);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  // Progress bar
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(elapsed / INTERVAL, 1));
    }, 30);
    return () => clearInterval(id);
  }, [current, paused]);

  return (
    <section
      className="relative h-screen min-h-[640px] flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image stack */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <Image
            src={slides[current].image}
            alt={slides[current].badge}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Overlay: dark in dark mode, lighter in light mode */}
          <div className="absolute inset-0 bg-black/55 dark:bg-black/65" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-16 max-w-4xl text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="space-y-6"
          >
            <Badge
              variant="outline"
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium border-white/30 bg-white/10 text-white backdrop-blur-sm"
            >
              <Shield className="w-3 h-3" />
              {slides[current].badge}
            </Badge>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] text-white">
              {slides[current].headline}
            </h1>

            <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              {slides[current].sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={slides[current].ctaHref}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 px-7 font-medium bg-white text-black hover:bg-white/90 border-0"
                )}
              >
                {slides[current].cta} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 px-7 font-medium border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                )}
              >
                Talk to Us
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom controls bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8">
        <div className="container mx-auto flex items-end justify-between gap-4 max-w-6xl">

          {/* Slide info + dots */}
          <div className="flex flex-col gap-3">
            {/* Credential tags */}
            <div className="hidden sm:flex items-center gap-2">
              {["FedRAMP High", "AWS GovCloud IL5", "CAGE 55L75"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="group relative h-1 rounded-full overflow-hidden bg-white/25 transition-all duration-300"
                  style={{ width: i === current ? 40 : 20 }}
                >
                  {i === current && (
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-white rounded-full"
                      style={{ width: `${progress * 100}%` }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-white/50 w-12 text-center tabular-nums">
              {current + 1} / {slides.length}
            </span>
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
