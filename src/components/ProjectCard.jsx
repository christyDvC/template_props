import { ExternalLink } from "lucide-react";

// Demonstrates: an OBJECT prop (`project`) whose fields are read out inside
// the child, plus a FUNCTION prop (`onActionClick`) — a callback the child
// invokes so the *parent* can react to a click happening inside the child.
function ProjectCard({ project, onActionClick, isActive }) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-100 ${
        isActive ? "border-rose-400 ring-1 ring-rose-300" : "border-stone-200"
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-rose-50 px-3 py-1 text-xs text-rose-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-4 font-serif text-xl text-stone-900">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-stone-500">
          {project.description}
        </p>
        <button
          onClick={() => onActionClick(project.id)}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-rose-700 transition-colors hover:text-pink-700"
        >
          {isActive ? "Viewing this one" : "View project"}
          <ExternalLink size={14} />
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;
