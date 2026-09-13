import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (technology: Technology) => void;
  onRemoveAll: () => void;
}

export default function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-500">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <p className="mt-6 rounded-lg bg-slate-50 px-4 py-6 text-center text-sm text-slate-400">
          No technologies selected yet. Add one from the list to start building
          your stack.
        </p>
      ) : (
        <ul className="mt-5 flex flex-col gap-3">
          {stack.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5"
            >
              <img src={tech.icon} alt="" className="h-8 w-8 object-contain" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {tech.name}
                </p>
                <p className="text-xs text-slate-500">{tech.category}</p>
              </div>
              <button
                type="button"
                onClick={() => onRemove(tech)}
                className="shrink-0 rounded-md p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-600"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {stack.length > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-lg border border-rose-200 py-2.5 text-sm font-semibold text-rose-500 hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
