import { BadgeCheck, BookOpenCheck } from "lucide-react";
import { trainings } from "../data/portfolio.js";

function TrainingStrip() {
  return (
    <section className="section-shell compact-section" aria-labelledby="training-title">
      <div className="training-panel" data-reveal>
        <div className="training-heading">
          <span className="skill-panel-icon">
            <BookOpenCheck size={20} aria-hidden="true" />
          </span>
          <div>
            <span className="section-kicker">Trainings and seminars</span>
            <h2 id="training-title">Current with modern IT practice.</h2>
          </div>
        </div>

        <div className="training-list">
          {trainings.map((training) => (
            <span key={training}>
              <BadgeCheck size={16} aria-hidden="true" />
              {training}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrainingStrip;
