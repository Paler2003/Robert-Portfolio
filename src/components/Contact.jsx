import { useMemo, useState } from "react";
import { Github, Mail, MapPin, Send, ShieldCheck } from "lucide-react";
import { profile } from "../data/portfolio.js";

const initialForm = {
  name: "",
  email: "",
  projectType: "Full-stack web app",
  message: "",
};

function getErrors(form) {
  const errors = {};

  if (!form.name.trim()) errors.name = "Name is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email address.";
  if (form.message.trim().length < 20) errors.message = "Share at least 20 characters about the project.";

  return errors;
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const errors = useMemo(() => getErrors(form), [form]);
  const isValid = Object.keys(errors).length === 0;

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const markTouched = (event) => {
    setTouched((current) => ({ ...current, [event.target.name]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!isValid) return;
    setSubmitted(true);
  };

  const mailSubject = encodeURIComponent(`Freelance inquiry: ${form.projectType}`);
  const mailBody = encodeURIComponent(
    `Hi John,\n\nMy name is ${form.name}.\n\nProject type: ${form.projectType}\n\n${form.message}\n\nReply to: ${form.email}`
  );

  return (
    <footer className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
      <div className="section-heading" data-reveal>
        <span className="section-kicker">Contact</span>
        <h2 id="contact-title">Bring John into the build.</h2>
        <p>
          Use the form to prepare a focused project inquiry, or reach out directly through email and GitHub.
        </p>
      </div>

      <div className="contact-grid" data-reveal>
        <aside className="contact-card">
          <span className="availability-badge">
            <ShieldCheck size={17} aria-hidden="true" />
            {profile.availability}
          </span>
          <h3>Freelance-ready full-stack support.</h3>
          <p>{profile.objective}</p>

          <div className="contact-link-list">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              {profile.email}
            </a>
            <a href={profile.github}>
              <Github size={18} aria-hidden="true" />
              github.com/Paler2003
            </a>
            <span>
              <MapPin size={18} aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </aside>

        <form className="contact-form" noValidate onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={updateField}
              onBlur={markTouched}
              aria-invalid={Boolean(touched.name && errors.name)}
              aria-describedby="name-error"
            />
            <small id="name-error" className="field-error">
              {touched.name && errors.name ? errors.name : " "}
            </small>
          </div>

          <div className="form-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={updateField}
              onBlur={markTouched}
              aria-invalid={Boolean(touched.email && errors.email)}
              aria-describedby="email-error"
            />
            <small id="email-error" className="field-error">
              {touched.email && errors.email ? errors.email : " "}
            </small>
          </div>

          <div className="form-field">
            <label htmlFor="project-type">Project Type</label>
            <select id="project-type" name="projectType" value={form.projectType} onChange={updateField}>
              <option>Full-stack web app</option>
              <option>Backend and database work</option>
              <option>UI/UX prototype</option>
              <option>Portfolio or business website</option>
              <option>System troubleshooting</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="project-brief">Project Brief</label>
            <textarea
              id="project-brief"
              name="message"
              rows="5"
              value={form.message}
              onChange={updateField}
              onBlur={markTouched}
              aria-invalid={Boolean(touched.message && errors.message)}
              aria-describedby="message-error"
            />
            <small id="message-error" className="field-error">
              {touched.message && errors.message ? errors.message : `${form.message.trim().length}/20 minimum`}
            </small>
          </div>

          <div className="form-actions">
            <button className="button button-primary" type="submit" disabled={!isValid}>
              <Send size={18} aria-hidden="true" />
              Prepare Inquiry
            </button>
            {submitted && (
              <a className="button button-secondary" href={`mailto:${profile.email}?subject=${mailSubject}&body=${mailBody}`}>
                Open Email Draft
                <Mail size={18} aria-hidden="true" />
              </a>
            )}
          </div>
        </form>
      </div>
    </footer>
  );
}

export default Contact;
