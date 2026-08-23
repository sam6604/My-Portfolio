import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ project }: { project: Project }) {
  const href = project.demoUrl ?? project.repoUrl;
  const isRepoOnly = !project.demoUrl && !!project.repoUrl;

  const content = (
    <>
      <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
        <div className="flex-1">
          <h3 className="flex items-center gap-1.5 font-sans text-[15.5px] font-medium text-fg">
            {project.name}
            {href && (
              <ArrowUpRight
                weight="bold"
                className="h-3.5 w-3.5 flex-none text-teal opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                aria-hidden
              />
            )}
          </h3>
          <p className="mt-1 max-w-[60ch] font-sans text-[13px] text-muted">{project.description}</p>
        </div>
        <p className="whitespace-normal font-mono text-[11.5px] text-amber sm:whitespace-nowrap sm:text-right">
          {project.stack.join(" · ")}
        </p>
      </div>

      {href && (
        <span className="mt-2.5 flex items-center gap-1.5 font-mono text-[11px] text-muted transition-colors duration-150 group-hover:text-teal">
          {isRepoOnly ? <GithubLogo weight="bold" className="h-3.5 w-3.5" aria-hidden /> : <ArrowUpRight weight="bold" className="h-3.5 w-3.5" aria-hidden />}
          {isRepoOnly ? "View source" : "View live"}
        </span>
      )}
    </>
  );

  const rowClass =
    "group flex flex-col justify-between gap-2 border-b border-line py-4 pl-0 transition-[padding] duration-150 ease-out hover:bg-raised hover:pl-4";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={rowClass}>
        {content}
      </a>
    );
  }

  return <div className={rowClass}>{content}</div>;
}

export function ProjectIndex() {
  return (
    <section className="border-t border-line py-14">
      <span className="mb-6 block font-mono text-xs uppercase tracking-[0.1em] text-teal">
        {"// projects"}
      </span>

      <ul>
        {projects.map((project, i) => (
          <Reveal as="li" key={project.name} delay={i * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
