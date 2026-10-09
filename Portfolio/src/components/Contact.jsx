import { useState } from "react";

const contactEmail = "gk831016@gmail.com";
const contactPhone = "+918146726626";
const linkedInUrl = "https://www.linkedin.com/in/gourav-kumar-308a7a281";

function Contact() {
  const [copyStatus, setCopyStatus] = useState("");

  const handleCopyEmail = async () => {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard access is unavailable.");
      await navigator.clipboard.writeText(contactEmail);
      setCopyStatus("Copied!");
    } catch {
      setCopyStatus("Copy failed");
    }

    window.setTimeout(() => setCopyStatus(""), 2500);
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="shell contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2 id="contact-title">
            Let’s talk about
            <br />
            <span>quality.</span>
          </h2>
          <p className="contact-copy">
            I’m open to QA and software testing roles. Send me an email or message me on
            Linkedin, and I’ll get back to you as soon as I can.
          </p>
          <a
            className="button button-dark contact-email-action"
            href={`mailto:${contactEmail}?subject=QA%20opportunity`}
          >
            Send an email <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="contact-details-panel" aria-label="Contact details">
          <div className="contact-detail-item contact-email-item">
            <div className="contact-detail-content">
              <span className="contact-field-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              <span className="contact-detail-text">
                <small>Email</small>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </span>
            </div>
            <span className="contact-copy-control">
              <button
                className="contact-copy-button"
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
              </button>
              <span
                className={`contact-copy-tooltip${copyStatus ? " is-visible" : ""}`}
                role="status"
                aria-live="polite"
              >
                {copyStatus}
              </span>
            </span>
          </div>
          <a
            className="contact-detail-item"
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-detail-content">
              <span className="contact-field-icon contact-field-icon-linkedin" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 3.5A1.5 1.5 0 1 1 5 6.5a1.5 1.5 0 0 1 0-3ZM3.75 8.5h2.5V20h-2.5zM9 8.5h2.4v1.57h.04a2.64 2.64 0 0 1 2.38-1.31c2.54 0 3.01 1.67 3.01 3.84V20h-2.5v-6.56c0-1.57-.03-2.5-1.52-2.5-1.51 0-1.74 1.17-1.74 2.42V20H9z" />
                </svg>
              </span>
              <span className="contact-detail-text">
                <small>LinkedIn</small>
                <b>linkedin.com/in/gourav-kumar-308a7a281</b>
              </span>
            </span>
            <span className="contact-detail-arrow" aria-hidden="true">↗</span>
          </a>
          <a className="contact-detail-item" href={`tel:${contactPhone}`}>
            <span className="contact-detail-content">
              <span className="contact-field-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                </svg>
              </span>
              <span className="contact-detail-text">
                <small>Phone</small>
                <b>+91 81467 26626</b>
              </span>
            </span>
            <span className="contact-detail-arrow" aria-hidden="true">↗</span>
          </a>
          <div className="contact-detail-item">
            <span className="contact-detail-content">
              <span className="contact-field-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span className="contact-detail-text">
                <small>Based in</small>
                <b>Punjab, India · Open to remote & hybrid</b>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
