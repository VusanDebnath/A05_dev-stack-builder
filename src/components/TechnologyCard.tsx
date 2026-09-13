import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-10 w-10 object-contain"
        />
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
          {technology.badge}
        </span>
      </div>

      {/* Name + Description */}
      <h3 className="mt-4 text-lg font-bold text-slate-900">
        {technology.name}
      </h3>
      <p className="mt-1.5 text-sm text-slate-500">{technology.description}</p>

      {/* Category chip + Difficulty + Rating */}
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
        <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-slate-600">
          {technology.category}
        </span>
        <span className="text-slate-500">{technology.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700">
          <span className="text-amber-400">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Add to Stack button */}
      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={
          isAdded
            ? "mt-5 w-full cursor-not-allowed rounded-lg bg-emerald-50 py-2.5 text-sm font-semibold text-emerald-600"
            : "mt-5 w-full rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        }
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}
