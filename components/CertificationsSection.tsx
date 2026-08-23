import { Reveal } from "@/components/Reveal";
import { certifications, education } from "@/lib/data";

export function CertificationsSection() {
  return (
    <section className="border-t border-line py-14">
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <div>
          <span className="mb-6 block font-mono text-xs uppercase tracking-[0.1em] text-teal">
            {"// certifications"}
          </span>
          <ul className="flex flex-col gap-4">
            {certifications.map((cert, i) => (
              <Reveal as="li" key={cert.name} delay={i * 0.05} className="border-t border-line pt-4">
                <h3 className="font-sans text-[14.5px] font-medium text-fg">{cert.name}</h3>
                <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-wide text-amber">
                  {cert.issuer}
                </p>
                <p className="mt-1.5 max-w-[58ch] font-sans text-[12.5px] text-muted">{cert.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <span className="mb-6 block font-mono text-xs uppercase tracking-[0.1em] text-teal">
            {"// education"}
          </span>
          <Reveal className="border-t border-line pt-4">
            <h3 className="font-sans text-[14.5px] font-medium text-fg">{education.degree}</h3>
            <p className="mt-1 font-sans text-[13px] text-muted">{education.school}</p>
            <p className="mt-2 font-mono text-[11px] text-muted">
              {education.start} — {education.end}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
