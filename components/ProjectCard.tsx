import { ExternalLink, Github } from "lucide-react";

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  demo?: string;
  image?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card overflow-hidden">
      {project.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map(s => (
            <span key={s} className="px-2 py-1 text-sm rounded-lg bg-gray-100">{s}</span>
          ))}
        </div>
        <div className="flex gap-4 pt-1">
          {project.repo && <a className="inline-flex items-center gap-2 underline" href={project.repo} target="_blank" rel="noreferrer"><Github className="w-4 h-4" /> Code</a>}
          {project.demo && <a className="inline-flex items-center gap-2 underline" href={project.demo} target="_blank" rel="noreferrer"><ExternalLink className="w-4 h-4" /> Demo</a>}
        </div>
      </div>
    </article>
  );
}
