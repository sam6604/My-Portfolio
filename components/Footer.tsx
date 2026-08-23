import { Reveal } from "@/components/Reveal";
import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-14">
      <Reveal>
        <span className="mb-4 block font-mono text-xs uppercase tracking-[0.1em] text-teal">
          {"// contact"}
        </span>
        <h2 className="balance font-sans text-[clamp(1.5rem,4vw,2.4rem)] font-semibold leading-tight text-fg">
          Open to new opportunities — say hello.
        </h2>
        <div className="mt-6 flex flex-wrap gap-5">
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
        <p className="mt-10 font-mono text-[11px] text-muted">
          © {year} {profile.name} · built with Next.js
        </p>
      </Reveal>
    </footer>
  );
}
