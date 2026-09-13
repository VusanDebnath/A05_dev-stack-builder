import logo from "../assets/logo-text.png";

const LINK_GROUPS: { title: string; links: string[] }[] = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand block */}
          <div className="lg:col-span-1">
            <a href="#top">
              <img src={logo} alt="Dev Stack logo" className="h-8 w-auto" />
            </a>
            <p className="mt-3 max-w-xs text-sm text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-4 flex gap-4 text-sm font-medium text-slate-600">
              <a href="#github" className="hover:text-slate-900">
                GitHub
              </a>
              <a href="#twitter" className="hover:text-slate-900">
                Twitter
              </a>
              <a href="#linkedin" className="hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Link groups */}
          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                {group.title}
              </h4>
              <ul className="mt-3 flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href={"#" + link.toLowerCase().replace(/\s+/g, "-")}
                      className="text-sm text-slate-500 hover:text-slate-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          
          <div className="flex gap-5">
            <a href="#privacy" className="hover:text-slate-900">
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
