import { ArrowDownRight, ArrowRight, Code2, Database, LayoutDashboard } from "lucide-react";
import { profile } from "../data/portfolio.js";

function Hero() {
  return (
    <section className="hero-section section-bleed" id="top" aria-labelledby="hero-title">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-signal-map" aria-hidden="true">
        <span className="signal-node node-a">
          <Code2 size={18} />
        </span>
        <span className="signal-node node-b">
          <Database size={18} />
        </span>
        <span className="signal-node node-c">
          <LayoutDashboard size={18} />
        </span>
        <span className="signal-line line-a" />
        <span className="signal-line line-b" />
      </div>

      <div className="section-inner hero-inner" data-reveal>
        <div className="hero-kicker">
          <span className="status-dot" aria-hidden="true" />
          IT Freelancer ready for hire
        </div>
        <h1 id="hero-title">Building Scalable Full-Stack Solutions with Pixels and Code.</h1>
        <p className="hero-copy">
          {profile.name} blends backend logic, database discipline, and sharp UI/UX instincts to ship responsive web
          systems that feel polished and work reliably.
        </p>

        <div className="hero-cta-group" aria-label="Portfolio actions">
          <a className="button button-primary" href="#contact">
            Let&apos;s Build / Hire Me
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#work">
            Explore Work
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </div>

        <dl className="hero-proof-grid" aria-label="Professional highlights">
          <div>
            <dt>Focus</dt>
            <dd>Full-stack systems</dd>
          </div>
          <div>
            <dt>Thesis</dt>
            <dd>CalorieKo</dd>
          </div>
          <div>
            <dt>Base</dt>
            <dd>{profile.location}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default Hero;
