import { Reveal } from "@/components/Reveal";
import { RevealTitle } from "@/components/RevealTitle";
import { projects } from "@/lib/data";

export function ProjectIndex() {
  return (
    <section className="border-t border-hair py-16">
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <RevealTitle className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-medium italic">
          Selected work
        </RevealTitle>
        <span className="font-mono text-xs text-sub">{projects.length} projects</span>
      </div>

      <ul>
        {projects.map((project, i) => (
          <Reveal
            as="li"
            key={project.name}
            delay={i * 0.05}
            className="group relative grid grid-cols-[56px_1fr] items-baseline gap-5 border-t border-hair py-6 transition-[padding-left] duration-200 ease-out hover:pl-3.5 sm:grid-cols-[76px_1fr_auto]"
          >
            <span
              aria-hidden
              className="absolute -left-3.5 top-0 h-full w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-y-100"
            />
            <span className="pt-1 font-mono text-xs text-sub">{project.year}</span>
            <div>
              <h3 className="font-sans text-lg font-semibold">{project.name}</h3>
              <p className="mt-1 max-w-[52ch] font-sans text-[13.5px] text-sub">{project.description}</p>
            </div>
            <p className="col-span-2 whitespace-normal font-mono text-[11px] text-accent sm:col-span-1 sm:whitespace-nowrap sm:text-right">
              {project.stack.join(", ")}
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
