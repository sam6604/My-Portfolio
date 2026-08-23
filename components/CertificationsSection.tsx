import { Reveal } from "@/components/Reveal";
import { RevealTitle } from "@/components/RevealTitle";
import { certifications, education } from "@/lib/data";

export function CertificationsSection() {
  return (
    <section className="border-t border-hair py-16">
      <div className="grid gap-14 md:grid-cols-[1.6fr_1fr]">
        <div>
          <RevealTitle className="mb-8 font-serif text-[clamp(1.5rem,3vw,2rem)] font-medium italic">
            Certifications
          </RevealTitle>
          <ul className="flex flex-col gap-5">
            {certifications.map((cert, i) => (
              <Reveal as="li" key={cert.name} delay={i * 0.05} className="border-t border-hair pt-5">
                <h3 className="font-sans text-[15px] font-semibold">{cert.name}</h3>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-accent">
                  {cert.issuer}
                </p>
                <p className="mt-1.5 max-w-[56ch] font-sans text-[13px] text-sub">{cert.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <RevealTitle className="mb-8 font-serif text-[clamp(1.5rem,3vw,2rem)] font-medium italic">
            Education
          </RevealTitle>
          <Reveal className="border-t border-hair pt-5">
            <h3 className="font-sans text-[15px] font-semibold">{education.degree}</h3>
            <p className="mt-1 font-sans text-sm text-sub">{education.school}</p>
            <p className="mt-2 font-mono text-xs text-sub">
              {education.start} — {education.end}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
