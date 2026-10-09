import { useEffect, useState } from "react";

const projectTags = [
  "Functional Testing",
  "API Testing",
  "Payments & Escrow",
  "AI Feature Testing",
  "Regression",
  "Mantis",
];

const puntingTags = [
  "End-to-end Testing",
  "POS Testing",
  "Seat Locking",
  "Payments & Refunds",
  "Role-based Access",
  "Cross-browser",
  "ZOHO",
];

const receptionistTags = [
  "End-to-end Testing",
  "Twilio",
  "ElevenLabs",
  "Call Transfers",
  "Ticket Creation",
  "Admin Dashboard",
  "Mantis",
];

const danjooTags = [
  "Voice AI",
  "Role-based Access",
  "Call Escalation",
  "CRM & Calendar",
  "CSV Import",
  "Batch Campaigns",
  "Excel",
];

const joyersTags = [
  "End-to-end Testing",
  "Supabase",
  "Cloudinary",
  "Media Uploads",
  "Realtime Updates",
  "Admin Panel",
  "Mantis",
];

const buildermatchSlides = [
  { src: "/Buildermatch1.png", alt: "Buildermatch tradesperson dashboard with jobs and earnings overview" },
  { src: "/Buildermatch2.png", alt: "Buildermatch job listing with AI match and pricing insights" },
  { src: "/Buildermatch3.png", alt: "Buildermatch messaging view with a customer offer" },
  { src: "/Buildermatch4.png", alt: "Buildermatch jobs dashboard with booking and payment information" },
  { src: "/Buildermatch5.png", alt: "Buildermatch earnings dashboard with payouts and escrow balance" },
  { src: "/Buildermatch6.png", alt: "Buildermatch AI job wizard API documentation" },
  { src: "/Buildermatch7.png", alt: "Buildermatch personal practice test script with configuration redacted" },
];

const createProjectSlides = (prefix, count) =>
  Array.from({ length: count }, (_, index) => ({
    src: `/${prefix}${index + 1}.png`,
    alt: `${prefix} project screenshot ${index + 1}`,
  }));

const puntingSlides = createProjectSlides("Punting", 5);
const receptionistSlides = createProjectSlides("Virtual", 5);
const joyersSlides = createProjectSlides("Joyers", 4);
const danjooSlides = createProjectSlides("Danjoo", 4);

function ProjectImageSlider({ slides, projectName, intervalMs = 4000 }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(intervalId);
  }, [intervalMs, slides]);

  const slide = slides[activeSlide];

  return (
    <a
      className="project-image-slider"
      href={slide.src}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open full-size ${projectName} screenshot: ${slide.alt}`}
    >
      <img
        key={slide.src}
        src={slide.src}
        alt={slide.alt}
        loading="eager"
        decoding="async"
      />
    </a>
  );
}

function Projects() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <section className="section work-section" id="work">
      <div className="shell">
        <div className="section-heading">
          <p className="eyebrow">SELECTED CASE STUDIES</p>
          <span className="section-index mono">04 — THE WORK</span>
        </div>
        <div className="work-heading">
          <h2>Quality in<br />the <span>details.</span></h2>
          <p>End-to-end quality across marketplace and booking platforms.</p>
        </div>
        <div className="project-grid">
          <article className="project-card project-large project-showcase">
            <div className="project-showcase-copy">
              <span className="project-type mono">MANUAL QA · API · WEB · MOBILE APP</span>
              <h3>buildermatch.ai</h3>
              <p>
                An AI-powered marketplace for the UK trades market. It connects homeowners with
                verified tradespeople using AI agents for job posting, lead matching and pricing
                suggestions. The platform includes escrow payments through Stripe, WhatsApp, SMS
                and email notifications, a partner revenue share system and a full admin panel.
                I tested the platform end to end across all four user roles: homeowner,
                tradesperson, partner and admin. My work covered the AI job wizard, matching and
                escalation, quotes and counter-offers, payments, messaging, GDPR and PECR
                compliance, and cross-browser and responsive behaviour. I logged and tracked all
                defects in Mantis.
              </p>
              <p className="project-practice-note">
                For personal practice, I also wrote a separate test script; it was not part of the
                delivered project scope.
              </p>
              <div className="chip-list project-showcase-tags">
                {projectTags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a
                className="button button-dark project-showcase-visit"
                href="https://dev.web.buildermatch.ai/login"
                target="_blank"
                rel="noreferrer"
              >
                Visit site <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="project-showcase-media">
              <div className="project-visual project-showcase-visual project-image-slider-visual">
                <ProjectImageSlider slides={buildermatchSlides} projectName="Buildermatch" />
              </div>
              <p className="project-showcase-caption">An AI-powered trades marketplace, tested end to end from the first job post to the final payout.</p>
            </div>
          </article>
          <article className="project-card project-large project-showcase">
            <div className="project-showcase-copy">
              <span className="project-type mono">MANUAL QA · WEB · POS</span>
              <h3>Scholars Punting Cambridge &amp; Canterbury Punting</h3>
              <p>
                A unified booking platform for two UK punting businesses, replacing separate
                online and in-branch booking systems. It serves both brands from one backend, with
                real-time seat selection, a central pricing engine for website and POS channels,
                Stripe, PayPal and Dojo card payments, automated tiered refunds, and email and SMS
                notifications. The platform includes a customer website, a tablet POS and a full
                admin panel with role-based access for Super Admin, Admin, Manager and Staff. I
                tested the platform end to end across web, admin and POS. My work covered the
                booking flow, seat locking and concurrency, pricing and discounts, payments and
                refunds, brand isolation, role permissions, and cross-browser and responsive
                behaviour. I logged and tracked all defects in Zoho.
              </p>
              <div className="chip-list project-showcase-tags">
                {puntingTags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a
                className="button button-dark project-showcase-visit"
                href="https://staging.canterburypunting.co.uk/"
                target="_blank"
                rel="noreferrer"
              >
                Visit site <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="project-showcase-media">
              <div className="project-visual project-showcase-visual project-image-slider-visual">
                <ProjectImageSlider
                  slides={puntingSlides}
                  projectName="Scholars Punting and Canterbury Punting"
                />
              </div>
              <p className="project-showcase-caption">One booking system for two punting brands, tested so a seat is never sold twice.</p>
            </div>
          </article>
          {!showMoreProjects && (
            <button
              className="button button-dark project-showcase-toggle"
              type="button"
              aria-expanded={false}
              onClick={() => setShowMoreProjects(true)}
            >
              View more
            </button>
          )}
          {showMoreProjects && (
            <>
          <article className="project-card project-large project-showcase">
            <div className="project-showcase-copy">
              <span className="project-type mono">AI VOICE · CALL FLOWS · QA</span>
              <h3>AI Virtual Receptionist</h3>
              <p>
                An AI receptionist for businesses that answers calls around the clock, sounds
                natural, and hands over to a human when needed. It talks to callers, looks up
                information, emails details during the call, transfers to an agent, and creates a
                support ticket when nobody is available. I tested the full call journey end to end.
                My work covered the Twilio call flows, ElevenLabs voice quality, in-call emails,
                escalation rules with priority-based transfer and retries, ticket creation with
                caller details, summary and transcript, and the admin dashboard for call history,
                recordings and analytics. I focused on failure handling, making sure every call
                ends in a resolution, a transfer, or a ticket. I logged and tracked all defects
                in Mantis.
              </p>
              <div className="chip-list project-showcase-tags">
                {receptionistTags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a
                className="button button-dark project-showcase-visit"
                href="https://stg.smartcaller.com.au/signIn"
                target="_blank"
                rel="noreferrer"
              >
                Visit site <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="project-showcase-media">
              <div className="project-visual project-showcase-visual project-image-slider-visual">
                <ProjectImageSlider
                  slides={receptionistSlides}
                  projectName="AI Virtual Receptionist"
                />
              </div>
              <p className="project-showcase-caption">Every call ends with an answer, a human handoff, or a complete support ticket.</p>
            </div>
          </article>
          <article className="project-card project-large project-showcase joyers-project-showcase">
            <div className="project-showcase-copy">
              <span className="project-type mono">SOCIAL · MOBILE · WEB QA</span>
              <h3>Joyers</h3>
              <p>
                A social platform with a mobile application, an admin panel and a landing page,
                built on Supabase for the database, authentication, storage and realtime updates,
                with Cloudinary for media such as profile images, posts, photos and videos. The
                admin panel and landing page are hosted on Vercel, with the code managed in
                GitHub. I tested the platform end to end across the mobile app, admin panel and
                landing page. My work covered sign-up and login, user profiles, post creation and
                media uploads, realtime updates, admin controls, and cross-device, cross-browser
                and responsive behaviour. I logged and tracked all defects in Mantis.
              </p>
              <div className="chip-list project-showcase-tags">
                {joyersTags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <div className="project-showcase-media">
              <div className="project-visual project-showcase-visual project-image-slider-visual joyers-image-slider-visual">
                <ProjectImageSlider
                  slides={joyersSlides}
                  projectName="Joyers"
                  intervalMs={3000}
                />
              </div>
              <p className="project-showcase-caption">Mobile social sharing and admin controls, tested across devices and browsers.</p>
            </div>
          </article>
          <article className="project-card project-large project-showcase">
            <div className="project-showcase-copy">
              <span className="project-type mono">VOICE AI · WEB · QA</span>
              <h3>Danjoo.AI</h3>
              <p>
                A Voice AI platform that lets businesses deploy their own AI phone assistants for
                inbound and outbound calls. Admins onboard customers, set up AI agents with a
                knowledge base and a dedicated phone number, and manage integrations with
                GoHighLevel CRM and Outlook Calendar. The platform supports human call escalation
                based on calendar availability, conversation history with transcripts and
                recordings, and batch calling campaigns. Customers get a read-only dashboard for
                their own agents, calls and leads. I tested the platform end to end across both
                user roles, admin and customer. My work covered authentication and role-based
                access, agent setup and the knowledge base, call escalation, transcripts and audio
                playback, CRM and calendar sync, contact lists and CSV import, batch campaigns,
                customer data isolation, and cross-browser and responsive behaviour. I logged and
                tracked all defects in an Excel sheet.
              </p>
              <div className="chip-list project-showcase-tags">
                {danjooTags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a
                className="button button-dark project-showcase-visit"
                href="https://danjoo.ai/"
                target="_blank"
                rel="noreferrer"
              >
                Visit site <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="project-showcase-media">
              <div className="project-visual project-showcase-visual project-image-slider-visual">
                <ProjectImageSlider slides={danjooSlides} projectName="Danjoo.AI" />
              </div>
              <p className="project-showcase-caption">One workspace for voice agents, connected tools, call history and captured leads.</p>
            </div>
          </article>
          <button
            className="button button-dark project-showcase-toggle"
            type="button"
            aria-expanded={true}
            onClick={() => setShowMoreProjects(false)}
          >
            View less
          </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
