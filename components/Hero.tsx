"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";

type Stage = "boot" | "whoami" | "identity" | "done";

export function Hero() {
  const [stage, setStage] = useState<Stage>("boot");
  const [typed, setTyped] = useState("");
  const [uptime, setUptime] = useState(0);
  const startRef = useRef<number>(0);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedRef.current) {
      setTyped("$ whoami");
      setStage("done");
    } else {
      let i = 0;
      const line = "$ whoami";
      const interval = setInterval(() => {
        i++;
        setTyped(line.slice(0, i));
        if (i >= line.length) {
          clearInterval(interval);
          setTimeout(() => setStage("identity"), 350);
        }
      }, 32);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    startRef.current = Date.now();
    const tick = () => setUptime(Math.floor((Date.now() - startRef.current) / 1000));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const showIdentity = stage === "identity" || stage === "done";

  return (
    <div className="term-glow relative min-h-[88vh] pt-16 pb-16">
      <div aria-hidden className="scanline pointer-events-none absolute left-0 right-0 top-0 h-36" />

      <div className="rounded-lg border border-line bg-raised shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
        <div className="flex items-center gap-2 border-b border-line bg-[#14160f] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3d34]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3d34]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3d34]" />
          <span className="ml-2 font-mono text-xs text-muted">sai@portfolio ~ %</span>
          <span className="ml-auto font-mono text-xs tabular-nums text-muted">
            uptime <span className="text-teal">{uptime}s</span>
          </span>
        </div>

        <div className="min-h-[280px] px-6 py-8 font-mono text-sm leading-loose sm:px-10 sm:py-10">
          <div>
            <span className="text-teal">{typed}</span>
            {stage === "boot" && <span className="cursor-blink ml-0.5 inline-block h-[1.1em] w-[9px] translate-y-[2px] bg-amber align-text-bottom" />}
          </div>

          {showIdentity && (
            <div className="mt-2 animate-[fadeUp_0.5s_ease_forwards]">
              <h1 className="balance mb-1 font-sans text-[clamp(1.9rem,5.5vw,3.4rem)] font-semibold leading-tight tracking-tight text-fg">
                {profile.name}
              </h1>
              <p className="font-mono text-sm text-amber sm:text-base">
                {profile.role} — {profile.tagline}
              </p>
              <p className="mt-4 max-w-[60ch] font-sans text-sm text-muted">{profile.bio}</p>

              <div className="mt-5 flex flex-wrap gap-5">
                <a
                  href={`mailto:${profile.email}`}
                  className="border-b border-transparent font-mono text-[13px] text-muted transition-colors hover:border-teal hover:text-teal"
                >
                  {profile.email}
                </a>
                <a
                  href={profile.github}
                  className="border-b border-transparent font-mono text-[13px] text-muted transition-colors hover:border-teal hover:text-teal"
                >
                  {profile.githubLabel}
                </a>
                <a
                  href={profile.linkedin}
                  className="border-b border-transparent font-mono text-[13px] text-muted transition-colors hover:border-teal hover:text-teal"
                >
                  {profile.linkedinLabel}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="mt-9 text-center font-mono text-[11px] tracking-[0.08em] text-muted">
        scroll ↓ to view work
      </p>
    </div>
  );
}
