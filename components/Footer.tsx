import { Reveal } from "@/components/Reveal";
import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hair py-16">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">Get in touch</p>
        <h2 className="balance font-serif text-[clamp(1.8rem,5vw,3.2rem)] font-medium italic leading-tight">
          Open to new opportunities — say hello.
        </h2>
        <div className="mt-7 flex flex-wrap gap-6">
          <a href={`mailto:${profile.email}`} className="link-underline font-sans text-sm font-semibold">
            {profile.email}
          </a>
          <a href={profile.github} className="link-underline font-sans text-sm font-semibold">
            {profile.githubLabel}
          </a>
          <a href={profile.linkedin} className="link-underline font-sans text-sm font-semibold">
            {profile.linkedinLabel}
          </a>
        </div>
        <p className="mt-12 font-mono text-[11px] text-sub">
          © {year} {profile.name}. Built with Next.js.
        </p>
      </Reveal>
    </footer>
  );
}
