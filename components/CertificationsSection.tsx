import { Trophy, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { certifications, education } from "@/lib/data";

export function CertificationsSection() {
  return (
    <section className="border-t border-line py-14">
      <span className="mb-6 block font-mono text-xs uppercase tracking-[0.1em] text-teal">
        {"// achievements"}
      </span>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {certifications.map((cert, i) => {
          const isAward = cert.type === "award";
          return (
            <Reveal
              as="li"
              key={cert.name}
              delay={i * 0.05}
              className={`relative overflow-hidden rounded-lg border p-5 ${
                isAward
                  ? "border-amber/40 bg-gradient-to-br from-amber/[0.08] to-transparent sm:col-span-2"
                  : "border-line bg-raised/60"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex h-9 w-9 flex-none items-center justify-center rounded-full border ${
                    isAward ? "border-amber/50 bg-amber/10 text-amber" : "border-teal/40 bg-teal/10 text-teal"
                  }`}
                >
                  {isAward ? (
                    <Trophy weight="fill" className="h-[18px] w-[18px]" aria-hidden />
                  ) : (
                    <SealCheck weight="fill" className="h-[18px] w-[18px]" aria-hidden />
                  )}
                </span>
                <div>
                  <h3 className="font-sans text-[14.5px] font-semibold text-fg">{cert.name}</h3>
                  <p
                    className={`mt-0.5 font-mono text-[10.5px] uppercase tracking-wide ${
                      isAward ? "text-amber" : "text-teal"
                    }`}
                  >
                    {cert.issuer}
                  </p>
                </div>
              </div>
              <p className="mt-3 max-w-[64ch] font-sans text-[12.5px] leading-relaxed text-muted">
                {cert.description}
              </p>
            </Reveal>
          );
        })}
      </ul>

      <div className="mt-10 border-t border-line pt-6">
        <span className="mb-4 block font-mono text-xs uppercase tracking-[0.1em] text-teal">
          {"// education"}
        </span>
        <Reveal>
          <h3 className="font-sans text-[14.5px] font-medium text-fg">{education.degree}</h3>
          <p className="mt-1 font-sans text-[13px] text-muted">{education.school}</p>
          <p className="mt-2 font-mono text-[11px] text-muted">
            {education.start} — {education.end}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
