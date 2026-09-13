import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo-text.png";
import { BRAND_GRADIENT } from "../constants";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleMobileLinkClick = (link: string) => {
    setActiveLink(link); // click korle line name ekhane use hobe mane active link value change hoy set hobe
    setIsMenuOpen(false); // Mobile manu off hobe
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-5 py-4 md:flex md:justify-between md:px-8">
        {/* Menu Icon ta md device porjonto hidden thakbe*/}
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Brand logo */}
        <a
          href="#top"
          className="flex items-center justify-center md:justify-start"
        >
          <img src={logo} alt="Dev Stack logo" className="h-8 w-auto" />
        </a>

        {/* desktop nav links small device projonto hidden thakbe sm device e burger nav kaj korbe */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setActiveLink(link)}
              className={
                activeLink === link
                  ? "text-sm font-medium text-pink-600"
                  : "text-sm font-medium text-slate-600 hover:text-slate-900"
              }
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Sign In / Sign Up */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <button className="text-xs font-medium text-slate-700 hover:text-slate-900 sm:text-sm">
            Sign In
          </button>
          <button
            className={`${BRAND_GRADIENT} rounded-full px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:px-4 sm:text-sm`}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Jokhon uporer button e mane menu berger button e click kora hobe tokhn sate er value true hoye jabe r ture hoye gele ai condition ta kaj korbe nav link golo nicher mtn kore show korbe.~! Menu burger md device porjonto hidden thakbe */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-slate-100 bg-white px-5 py-3">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    activeLink === link
                      ? "bg-pink-50 text-pink-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                  onClick={() => handleMobileLinkClick(link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
