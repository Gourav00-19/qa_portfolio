import SiteFooter from "./components/SiteFooter.jsx";

function Resume() {
  return (
    <>
      <a className="skip-link" href="#resume">Skip to resume</a>
      <header className="site-header resume-header">
        <nav className="nav shell" aria-label="Resume navigation">
          <a className="brand" href="index.html" aria-label="Return to portfolio">
            <span className="brand-mark">G<span /></span>
            <span className="brand-name">GOURAV/Quality Analyst</span>
          </a>
          <a className="resume-nav-link" href="index.html">Portfolio <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main className="resume-main shell" id="resume">
        <div className="resume-top">
          <a href="index.html">← Back to portfolio</a>
          <a className="button button-dark" href="/Gourav_QA_CV_updated.pdf" download="Gourav_QA_CV_updated.pdf">
            Download PDF <span aria-hidden="true">↓</span>
          </a>
        </div>
        <section className="resume-hero">
          <div>
            <div className="resume-name-row">
              <h1>Gourav</h1>
              <div className="resume-badge" aria-hidden="true">G</div>
            </div>
            <p>
              Quality Analyst · Sabour, Rupnagar, Punjab, India ·{" "}
              <a href="mailto:gk831016@gmail.com">gk831016@gmail.com</a> ·{" "}
              <a href="tel:+918146726626">+91 81467 26626</a> ·{" "}
              <a href="https://www.linkedin.com/in/gourav-kumar-308a7a281/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </section>
        <section className="resume-block">
          <h2>PROFESSIONAL SUMMARY</h2>
          <p>
            Proficient Quality Analyst with experience handling and resolving critical quality problems through research and analysis. Strong organizational and planning abilities, with the ability to work independently and consistently with minimum supervision.
          </p>
        </section>

        <div className="resume-columns">
          <section className="resume-block">
            <h2>EXPERIENCE</h2>
            <article className="resume-entry">
              <div className="entry-meta"><span>EMINENCE TECHNOLOGY</span><span>MARCH 2025 — CURRENT</span></div>
              <h3>Associate Quality Analyst</h3>
              <ul>
                <li>Reviewed user needs and system designs to create useful test scenarios.</li>
                <li>Created and followed test plans and test cases to verify software functionality.</li>
                <li>Reviewed development processes to identify opportunities to improve accuracy and efficiency.</li>
                <li>Reported and tracked bugs using Mantis.</li>
                <li>Worked closely with developers to identify and resolve issues early in development.</li>
              </ul>
            </article>
            <article className="resume-entry">
              <div className="entry-meta"><span>CYBERNAUTICSTECH PVT. LTD.</span><span>JUNE 2024 — FEBRUARY 2025</span></div>
              <h3>Junior Quality Analyst</h3>
              <ul>
                <li>Conducted functional and API testing using Postman; logged and tracked bugs using Mantis.</li>
                <li>Collaborated with developers to detect defects early and improve build stability.</li>
              </ul>
            </article>
          </section>
          <section className="resume-block">
            <h2>EDUCATION</h2>
            <article className="resume-entry">
              <div className="entry-meta"><span>PUNJABI UNIVERSITY · PATIALA</span><span>2020 — 2024</span></div>
              <h3>Bachelor of Electronic and Computer Engineering</h3>
              <p>GPA: 8.27</p>
            </article>
          </section>
        </div>

        <section className="resume-block">
          <h2>QA SKILLS &amp; TOOLS</h2>
          <div className="resume-skills">
            <div><strong>Manual testing</strong><span>Functional testing · smoke testing · regression testing · retesting</span></div>
            <div><strong>API testing</strong><span>Swagger · Postman · Apidog</span></div>
            <div><strong>Bug reporting</strong><span>Excel · Mantis · Trello</span></div>
            <div><strong>Automation testing</strong><span>Python · Playwright</span></div>
            <div><strong>Version control</strong><span>GitHub</span></div>
            <div><strong>Databases</strong><span>Basic knowledge of SQL and MongoDB</span></div>
          </div>
        </section>

        <section className="resume-block" id="projects">
          <h2>SELECTED QA PROJECTS</h2>
          <div className="resume-projects">
            <article>
              <h3>Buildermatch.ai</h3>
              <ul>
                <li>Tested homeowner and tradesperson journeys, including the AI job wizard, quote and counter-offer flow, Stripe escrow payments, live ETA tracking, and multi-visit milestone jobs.</li>
                <li>Validated AI features such as photo-based job descriptions, matching and escalation, and the RAG support chatbot using real-world scenarios.</li>
                <li>Verified WhatsApp, SMS, and email notifications; PECR/GDPR consent flows; and admin and partner revenue-share modules.</li>
                <li>Tracked defects in Mantis and ran cross-browser and responsive regression testing.</li>
              </ul>
            </article>
            <article>
              <h3>Scholars Punting Cambridge &amp; Canterbury Punting</h3>
              <ul>
                <li>Tested a multi-tenant booking platform and its booking flow from tour selection through date, time slot, passengers, seat map, add-ons, and payment.</li>
                <li>Validated real-time seat locking, including concurrent booking and lock-expiry scenarios to prevent double bookings.</li>
                <li>Tested category-, slot-, and channel-based pricing, discount codes, bulk pricing templates, Stripe and PayPal payments, and cancellation and refund policies.</li>
                <li>Performed role-based access testing and end-to-end regression across the website, admin panel, and POS tablet interface.</li>
              </ul>
            </article>
            <article>
              <h3>Joyers</h3>
              <ul>
                <li>Tested a social platform end to end across the mobile app, admin panel and landing page, including sign-up, login, profiles and post creation.</li>
                <li>Validated photo and video uploads through Cloudinary and Supabase authentication, storage, database and realtime updates.</li>
                <li>Tested admin controls, cross-device and cross-browser behavior, and responsive layouts; tracked defects in Mantis.</li>
              </ul>
            </article>
            <article>
              <h3>Danjoo.AI</h3>
              <ul>
                <li>Tested a Voice AI platform end to end across admin and customer roles, including authentication, role-based access and customer data isolation.</li>
                <li>Validated AI agent setup, knowledge bases, dedicated phone numbers, human escalation, conversation transcripts and recordings.</li>
                <li>Tested GoHighLevel CRM and Outlook Calendar integrations, contact lists, CSV import and batch calling campaigns across browsers and responsive layouts.</li>
                <li>Logged and tracked defects in an Excel sheet.</li>
              </ul>
            </article>
          </div>
        </section>
        <div className="resume-footer">
          <a href="index.html">← Return to portfolio</a>
        </div>
      </main>
      <SiteFooter homeHref="index.html#home" backTopHref="#resume" />
    </>
  );
}

export default Resume;
