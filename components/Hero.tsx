"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { profile } from "@/lib/data";

function ParallaxWord({
  children,
  depth,
  mx,
  my,
  className,
}: {
  children: React.ReactNode;
  depth: number;
  mx: ReturnType<typeof useMotionValue<number>>;
  my: ReturnType<typeof useMotionValue<number>>;
  className?: string;
}) {
  const x = useTransform(mx, (v) => v * depth * 14);
  const y = useTransform(my, (v) => v * depth * 10);
  const springX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.4 });

  return (
    <motion.span className={`block ${className ?? ""}`} style={{ x: springX, y: springY }}>
      {children}
    </motion.span>
  );
}

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      className="grid min-h-[92vh] content-center pt-24 pb-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.p
        className="relative mb-5 inline-block w-fit font-mono text-xs uppercase tracking-[0.14em] text-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Portfolio — 2026
        <motion.span
          className="absolute -bottom-1.5 left-0 h-px bg-accent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.p>

      <h1 className="balance mb-4 font-serif text-[clamp(3.2rem,10vw,8.25rem)] font-medium leading-[0.94] tracking-tight">
        <ParallaxWord depth={0.4} mx={mx} my={my}>
          Sai
        </ParallaxWord>
        <ParallaxWord depth={0.8} mx={mx} my={my}>
          Samanvith <em className="font-normal italic text-accent">S.</em>
        </ParallaxWord>
      </h1>

      <div className="flex max-w-[760px] flex-wrap items-baseline gap-3.5 border-t border-hair pt-4 font-sans text-base text-sub sm:text-xl">
        <strong className="font-semibold text-ink">{profile.role}</strong>
        <span>— {profile.tagline}</span>
      </div>

      <p className="mt-5 max-w-[56ch] font-sans text-[15.5px] leading-[1.7] text-sub">{profile.bio}</p>

      <div className="mt-7 flex flex-wrap gap-6">
        <a
          href={`mailto:${profile.email}`}
          className="link-underline font-sans text-sm font-semibold text-ink"
        >
          {profile.email}
        </a>
        <a href={profile.github} className="link-underline font-sans text-sm font-semibold text-ink">
          GitHub
        </a>
        <a href={profile.linkedin} className="link-underline font-sans text-sm font-semibold text-ink">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
