import { RevealTitle } from "@/components/RevealTitle";
import { skills, tickerSkills } from "@/lib/data";

export function SkillsSection() {
  const loop = [...tickerSkills, ...tickerSkills];

  return (
    <section className="border-t border-hair py-16">
      <RevealTitle className="mb-8 font-serif text-[clamp(1.5rem,3vw,2rem)] font-medium italic">
        Toolbox
      </RevealTitle>

      <div className="mb-9 flex flex-wrap gap-x-8 gap-y-3">
        {skills.map((group) => (
          <p key={group.group} className="font-sans text-sm text-sub">
            <strong className="font-semibold text-ink">{group.group}</strong> — {group.items.join(", ")}
          </p>
        ))}
      </div>

      <div className="ticker-mask border-y border-hair py-4">
        <div className="ticker-track flex w-max gap-10">
          {loop.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap font-mono text-[13px] text-sub"
            >
              <span className="text-accent">·</span>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
