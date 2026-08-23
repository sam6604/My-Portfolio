import { Reveal } from "@/components/Reveal";
import { RevealTitle } from "@/components/RevealTitle";
import { experience } from "@/lib/data";

export function ExperienceList() {
  return (
    <section className="border-t border-hair py-16">
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <RevealTitle className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-medium italic">
          Experience
        </RevealTitle>
        <span className="font-mono text-xs text-sub">{experience.length} roles</span>
      </div>

      <ul className="flex flex-col gap-10">
        {experience.map((role, i) => (
          <Reveal as="li" key={role.role + role.org} delay={i * 0.06}>
            <div className="flex flex-col gap-3 border-t border-hair pt-6 sm:flex-row sm:justify-between">
              <div>
                <h3 className="font-sans text-lg font-semibold">{role.role}</h3>
                <p className="mt-1 font-sans text-sm text-sub">
                  {role.org} · {role.mode}
                </p>
              </div>
              <span className="whitespace-nowrap font-mono text-xs text-sub">
                {role.start} — {role.end}
              </span>
            </div>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-accent">{role.tools}</p>
            <ul className="mt-3 flex max-w-[68ch] flex-col gap-1.5">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="font-sans text-[14px] leading-relaxed text-sub">
                  <span className="mr-2 text-accent">—</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
