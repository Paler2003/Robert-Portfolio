import { useMemo, useState } from "react";
import { Code2, Database, Palette, SlidersHorizontal } from "lucide-react";
import { skillGroups } from "../data/portfolio.js";

const groupIcons = {
  core: Code2,
  database: Database,
  creative: Palette,
};

function SkillsInventory() {
  const [activeGroup, setActiveGroup] = useState("all");

  const visibleGroups = useMemo(() => {
    if (activeGroup === "all") return skillGroups;
    return skillGroups.filter((group) => group.id === activeGroup);
  }, [activeGroup]);

  return (
    <section className="section-shell" id="skills" aria-labelledby="skills-title">
      <div className="section-heading" data-reveal>
        <span className="section-kicker">Interactive skills inventory</span>
        <h2 id="skills-title">Engineering depth with UI execution.</h2>
        <p>
          Skills are grouped from the CV into core development, database management, and creative interface work.
        </p>
      </div>

      <div className="skill-filter" role="tablist" aria-label="Filter skill categories" data-reveal>
        <button
          className={activeGroup === "all" ? "is-active" : ""}
          type="button"
          role="tab"
          aria-selected={activeGroup === "all"}
          onClick={() => setActiveGroup("all")}
        >
          <SlidersHorizontal size={16} aria-hidden="true" />
          All
        </button>
        {skillGroups.map((group) => {
          const Icon = groupIcons[group.id];
          return (
            <button
              className={activeGroup === group.id ? "is-active" : ""}
              key={group.id}
              type="button"
              role="tab"
              aria-selected={activeGroup === group.id}
              onClick={() => setActiveGroup(group.id)}
            >
              <Icon size={16} aria-hidden="true" />
              {group.label}
            </button>
          );
        })}
      </div>

      <div className="skills-grid">
        {visibleGroups.map((group) => {
          const Icon = groupIcons[group.id];
          return (
            <article className="skill-panel" key={group.id} data-reveal>
              <div className="skill-panel-heading">
                <span className="skill-panel-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3>{group.label}</h3>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className="badge-grid">
                {group.skills.map((skill) => (
                  <button className="skill-badge" key={skill.name} type="button" aria-label={`${skill.name}: ${skill.use}`}>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-meta">{skill.level}</span>
                    <span className="skill-use">{skill.use}</span>
                  </button>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsInventory;
