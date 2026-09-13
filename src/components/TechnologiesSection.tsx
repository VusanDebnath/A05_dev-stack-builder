import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import Loader from "./Loader";
import { BRAND_GRADIENT } from "../constants";

interface TechnologiesSectionProps {
  technologies: Technology[];
  isLoading: boolean;
  stack: Technology[];
  isInStack: (id: string) => boolean;
  onAdd: (technology: Technology) => void;
  onRemove: (technology: Technology) => void;
  onRemoveAll: () => void;
}

export default function TechnologiesSection({
  technologies,
  isLoading,
  stack,
  isInStack,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologiesSectionProps) {
  return (
    <section id="technologies" className="mx-auto max-w-7xl px-5 py-12 md:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Explore the Technologies
      </h2>
      <span className={`mt-3 block h-1 w-16 rounded-full ${BRAND_GRADIENT}`} />
      <p className="mt-2 text-slate-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-3">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  technology={tech}
                  isAdded={isInStack(tech.id)}
                  onAdd={onAdd}
                />
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <YourStack
            stack={stack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  );
}
