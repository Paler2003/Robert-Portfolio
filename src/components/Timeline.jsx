import { BriefcaseBusiness, CalendarDays, GraduationCap, UsersRound } from "lucide-react";
import { timeline } from "../data/portfolio.js";

const typeIcons = {
  Internship: BriefcaseBusiness,
  Work: BriefcaseBusiness,
  Leadership: UsersRound,
  Community: UsersRound,
  Training: CalendarDays,
  Education: GraduationCap,
};

function Timeline() {
  return (
    <section className="section-shell timeline-section" id="timeline" aria-labelledby="timeline-title">
      <div className="section-heading" data-reveal>
        <span className="section-kicker">Dual-track timeline</span>
        <h2 id="timeline-title">Experience, leadership, and applied learning.</h2>
        <p>
          A chronological track that connects John&apos;s technical internships with public service, leadership, and
          ongoing academic work.
        </p>
      </div>

      <div className="timeline-list" data-reveal>
        {timeline.map((item) => {
          const Icon = typeIcons[item.type] ?? CalendarDays;
          return (
            <article className="timeline-item" key={`${item.period}-${item.title}`}>
              <div className="timeline-marker">
                <Icon size={18} aria-hidden="true" />
              </div>
              <div className="timeline-card">
                <div className="timeline-card-top">
                  <span>{item.period}</span>
                  <strong>{item.type}</strong>
                </div>
                <h3>{item.title}</h3>
                <p className="timeline-org">{item.organization}</p>
                <p className="timeline-location">{item.location}</p>
                <span className="timeline-impact">{item.impact}</span>
                <p className="timeline-detail">{item.detail}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Timeline;
