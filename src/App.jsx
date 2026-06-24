import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import FeaturedProject from "./components/FeaturedProject.jsx";
import TagumProject from "./components/TagumProject.jsx";
import SkillsInventory from "./components/SkillsInventory.jsx";
import Timeline from "./components/Timeline.jsx";
import TrainingStrip from "./components/TrainingStrip.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = document.querySelectorAll("[data-reveal]");

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <div className="content-blur-wrapper">
          <FeaturedProject />
          <TagumProject />
          <SkillsInventory />
          <Timeline />
          <TrainingStrip />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
