import { Reveal } from "@/components/Reveal";
import { skills, tickerSkills } from "@/lib/data";

export function SkillsSection() {
  const loop = [...tickerSkills, ...tickerSkills];
  const allTags = skills.flatMap((g) => g.items);

  return (
    <section className="border-t border-line py-14">
      <span className="mb-6 block font-mono text-xs uppercase tracking-[0.1em] text-teal">
        {"// stack --list"}
      </span>

      <div className="flex flex-wrap gap-2">
        {allTags.map((tag, i) => (
          <Reveal
            key={tag}
            delay={i * 0.02}
            className="rounded-md border border-line px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-amber hover:text-amber"
          >
            {tag}
          </Reveal>
        ))}
      </div>

      <div className="ticker-mask mt-8 border-y border-line py-3.5">
        <div className="ticker-track flex w-max gap-9">
          {loop.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap font-mono text-[12.5px] text-muted"
            >
              <span className="text-teal">·</span>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
