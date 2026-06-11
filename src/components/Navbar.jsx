import { useState } from "react";
import { navLinks } from "../data/content";
import LogoText from "./Logotext";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="site-container">
        <div className="navbar-inner">

          {/* Brand */}
          {/* <a href="#" className="navbar-brand">
            <div className="navbar-emblem" aria-hidden="true">MU</div>
            <div>
              <div className="navbar-name-en">University of Mumbai</div>
              <div className="navbar-name-hi">मुंबई विद्यापीठ</div>
            </div>
          </a> */}
           <div className="flex items-center gap-2">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-medium text- shrink-0 border-[1.5px]"
            style={{ background: "var(--teal)", borderColor: "var(--teal2)" }}
          >
           <img src={import.meta.env.BASE_URL + "logo.png"} 
  className="w-10 h-8"
 alt="" srcSet="" />
          </div>
          <div className="leading-[1.15]">
       
            <LogoText/>
          </div>
        </div>

          {/* Desktop links */}
          <nav aria-label="Primary navigation">
            <ul className="navbar-links">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger */}
          <button
            className={`hamburger${open ? " open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="ham-bar" />
            <span className="ham-bar" />
            <span className="ham-bar" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={`mobile-menu${open ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="site-container" style={{ paddingBlock: "0.5rem" }}>
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
