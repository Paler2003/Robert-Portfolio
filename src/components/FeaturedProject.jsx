import { useState } from "react";
import { Cpu, Gauge, Layers3, ScanLine, Scale3D, X } from "lucide-react";
import { project } from "../data/portfolio.js";

const icons = [Scale3D, Cpu, ScanLine, Gauge];

function FeaturedProject() {
  const [showArchitecture, setShowArchitecture] = useState(false);

  return (
    <section className="section-shell" id="work" aria-labelledby="work-title">
      <div className="section-heading" data-reveal>
        <span className="section-kicker">{project.eyebrow}</span>
        <h2 id="work-title">{project.name}: the showpiece system.</h2>
        <p>{project.summary}</p>
      </div>

      <article className="project-bento" data-reveal>
        <div className="project-copy">
          <div className="project-logo-row">
            <img src="/assets/calorieko-logo.jpg" alt="CalorieKo logo" />
            <div>
              <span className="project-label">Capstone thesis</span>
              <h3>{project.title}</h3>
            </div>
          </div>

          <div className="stack-list" aria-label="CalorieKo technology stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <p>
            CalorieKo is presented as John&apos;s strongest proof of range: mobile development, Python recognition
            logic, and hardware-aware thinking tied into one nutrition tracking workflow.
          </p>

          <button
            className="button button-project"
            type="button"
            aria-expanded={showArchitecture}
            aria-controls="architecture-panel"
            onClick={() => setShowArchitecture((value) => !value)}
          >
            <Layers3 size={18} aria-hidden="true" />
            {showArchitecture ? "Hide Architecture" : "View System Architecture"}
          </button>
        </div>

        <div className="project-visual" aria-label="CalorieKo interface and hardware integration visualization">
          <div className="phone-frame">
            <div className="phone-status">
              <span />
              <span />
              <span />
            </div>
            <div className="app-card-top">
              <img src="/assets/calorieko-logo.jpg" alt="" aria-hidden="true" />
              <div>
                <strong>CalorieKo</strong>
                <small>Nutrition capture</small>
              </div>
            </div>
            <div className="scan-window">
              <ScanLine size={36} aria-hidden="true" />
              <span>Image recognition</span>
            </div>
            <div className="metric-row">
              <span>Weight</span>
              <strong>Smart scale</strong>
            </div>
            <div className="metric-row">
              <span>Client</span>
              <strong>Android + Java</strong>
            </div>
          </div>

          <div className="scale-device" aria-hidden="true">
            <div className="scale-plate" />
            <div className="scale-base">
              <span>Scale feed</span>
            </div>
          </div>
        </div>

        {showArchitecture && (
          <div className="architecture-panel" id="architecture-panel">
            <div className="architecture-header">
              <div>
                <span className="project-label">Interaction model</span>
                <h4>Software-to-hardware workflow</h4>
              </div>
              <button
                className="icon-link"
                type="button"
                aria-label="Close architecture panel"
                onClick={() => setShowArchitecture(false)}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="architecture-grid">
              {project.architecture.map((item, index) => {
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

export default FeaturedProject;
