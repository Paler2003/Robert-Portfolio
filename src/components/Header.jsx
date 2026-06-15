import { Github, Mail } from "lucide-react";
import { profile } from "../data/portfolio.js";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand-lockup" href="#top" aria-label="John Robert A. Paler home">
          <span className="brand-mark">JR</span>
          <span>
            <strong>John Robert A. Paler</strong>
            <small>Full Stack Developer</small>
          </span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="icon-link" href={profile.github} aria-label="Open John's GitHub profile">
            <Github size={18} aria-hidden="true" />
          </a>
          <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Email John Robert A. Paler">
            <Mail size={18} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
