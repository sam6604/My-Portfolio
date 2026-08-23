import { Reveal } from "@/components/Reveal";
import { experience } from "@/lib/data";

export function ExperienceList() {
  return (
    <section className="border-t border-line py-14">
      <span className="mb-6 block font-mono text-xs uppercase tracking-[0.1em] text-teal">
        {"// experience --log"}
      </span>

      <ul className="flex flex-col gap-1">
        {experience.map((role, i) => (
          <Reveal as="li" key={role.role + role.org} delay={i * 0.06} className="flex gap-4 py-4">
            <span className="pulse-dot mt-[7px] h-[9px] w-[9px] flex-none rounded-full bg-teal shadow-[0_0_0_3px_rgba(107,212,189,0.15)]" />
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-sans text-[15px] font-semibold text-fg">{role.role}</h3>
                <span className="whitespace-nowrap font-mono text-[11px] text-muted">
                  {role.start} — {role.end}
                </span>
              </div>
              <p className="mt-0.5 font-sans text-[13px] text-muted">
                {role.org} · {role.mode}
              </p>
              <p className="mt-2 font-mono text-[11px] text-amber">{role.tools}</p>
              <ul className="mt-2.5 flex max-w-[64ch] flex-col gap-1.5">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="font-sans text-[13.5px] leading-relaxed text-muted">
                    <span className="mr-2 text-teal">—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
