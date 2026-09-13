import { BRAND_GRADIENT } from "../constants";
import banner from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"
    >
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Build Your Ideal
            <br />
            <span className={`bg-clip-text text-transparent ${BRAND_GRADIENT}`}>
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-md text-slate-600">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className={`${BRAND_GRADIENT} rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-90`}
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={banner}
            alt="Development stack illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}