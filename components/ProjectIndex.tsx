import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/data";

export function ProjectIndex() {
  return (
    <section className="border-t border-line py-14">
      <span className="mb-6 block font-mono text-xs uppercase tracking-[0.1em] text-teal">
        {"// projects"}
      </span>

      <ul>
        {projects.map((project, i) => (
          <Reveal
            as="li"
            key={project.name}
            delay={i * 0.05}
            className="group flex flex-col justify-between gap-2 border-b border-line py-4 pl-0 transition-[padding] duration-150 ease-out hover:bg-raised hover:pl-4 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <div>
              <h3 className="font-sans text-[15.5px] font-medium text-fg">{project.name}</h3>
              <p className="mt-1 max-w-[60ch] font-sans text-[13px] text-muted">{project.description}</p>
            </div>
            <p className="whitespace-normal font-mono text-[11.5px] text-amber sm:whitespace-nowrap sm:text-right">
              {project.stack.join(" · ")}
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
