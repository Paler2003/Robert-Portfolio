import { useState } from "react";
import { Globe, Layers3, Monitor, Pencil, Shield, Sparkles, X, ExternalLink } from "lucide-react";
import { tagumProject } from "../data/portfolio.js";

const icons = [Monitor, Pencil, Globe, Sparkles];

function TagumProject() {
  const [showHighlights, setShowHighlights] = useState(false);

  return (
    <section className="section-shell" id="tagum-project" aria-labelledby="tagum-title">
      <div className="section-heading" data-reveal>
        <span className="section-kicker">{tagumProject.eyebrow}</span>
        <h2 id="tagum-title">{tagumProject.name}: web management.</h2>
        <p>{tagumProject.summary}</p>
      </div>

      <article className="project-bento tagum-bento" data-reveal>
        <div className="project-copy">
          <div className="project-logo-row">
            <img src="/assets/tagum-city-logo.png" alt="City Government of Tagum logo" />
            <div>
              <span className="project-label">Web Developer &mdash; City Information Office</span>
              <h3>{tagumProject.title}</h3>
            </div>
          </div>

          <div className="stack-list" aria-label="City Government of Tagum technology stack">
            {tagumProject.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <p>
            As Web Developer at the City Information Office since January 28, 2026, John manages the
            official City Government of Tagum website — maintaining content, optimizing user experience,
            and ensuring the city&apos;s digital services remain accessible and up to date.
          </p>

          <div className="tagum-actions">
            <a
              className="button button-primary"
              href={tagumProject.url}
              target="_blank"
              rel="noopener noreferrer"
              id="tagum-visit-link"
            >
              <ExternalLink size={18} aria-hidden="true" />
              Visit tagumcity.gov.ph
            </a>

            <button
              className="button button-project"
              type="button"
              aria-expanded={showHighlights}
              aria-controls="tagum-highlights-panel"
              onClick={() => setShowHighlights((value) => !value)}
            >
              <Layers3 size={18} aria-hidden="true" />
              {showHighlights ? "Hide Responsibilities" : "View Responsibilities"}
            </button>
          </div>
        </div>

        <div className="project-visual tagum-visual" aria-label="City Government of Tagum website preview">
          <div className="browser-frame">
            <div className="browser-bar">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-url">
                <Shield size={12} aria-hidden="true" />
                <span>tagumcity.gov.ph</span>
              </div>
            </div>

            <div className="browser-content">
              <div className="browser-nav-preview">
                <img src="/assets/tagum-city-logo.png" alt="" aria-hidden="true" className="browser-logo" />
                <div className="browser-nav-links">
                  <span>We Are Tagum</span>
                  <span>For Residents</span>
                  <span>For Visitors</span>
                  <span>For Businesses</span>
                </div>
              </div>

              <div className="browser-hero-preview">
                <strong>TAGUM</strong>
                <small>The City of Harmony</small>
              </div>

              <div className="browser-content-grid">
                <div className="browser-card">
                  <Globe size={16} aria-hidden="true" />
                  <span>City Services</span>
                </div>
                <div className="browser-card">
                  <Monitor size={16} aria-hidden="true" />
                  <span>Digital Gov</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showHighlights && (
          <div className="architecture-panel" id="tagum-highlights-panel">
            <div className="architecture-header">
              <div>
                <span className="project-label">Role overview</span>
                <h4>Web Developer responsibilities</h4>
              </div>
              <button
                className="icon-link"
                type="button"
                aria-label="Close responsibilities panel"
                onClick={() => setShowHighlights(false)}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="architecture-grid">
              {tagumProject.highlights.map((item, index) => {
                const Icon = icons[index] ?? Layers3;
                return (
                  <div className="architecture-step" key={item.title}>
                    <span className="step-icon">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <strong>{item.title}</strong>
                    <p>{item.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </article>
    </section>
  );
}

export default TagumProject;
