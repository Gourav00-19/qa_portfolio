function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="shell">
        <div className="section-heading">
          <p className="eyebrow">MY QA TOOLKIT</p>
          <span className="section-index mono">02 — SKILLS</span>
        </div>
        <div className="skills-heading">
          <h2>
            Detail-oriented testing.
            <br />
            <span>Reliable software.</span>
          </h2>
          <p>
            Quality-focused tester who finds issues early and communicates them clearly.
          </p>
        </div>
        <div className="skills-grid">
          <article className="skill-card">
            <span className="skill-icon">01</span>
            <h3>Manual testing</h3>
            <p>
              Thorough coverage of critical user journeys, edge cases, and real-world usage
              scenarios.
            </p>
            <div className="chip-list">
              <span>Functional</span>
              <span>Exploratory</span>
              <span>Regression</span>
              <span>UAT</span>
              <span>Retesting</span>
            </div>
          </article>
          <article className="skill-card">
            <span className="skill-icon">02</span>
            <h3>Automation</h3>
            <p>
              Repeatable browser checks that catch regressions early and support faster, more
              confident releases.
            </p>
            <div className="chip-list">
              <span>Playwright (Python)</span>
            </div>
          </article>
          <article className="skill-card">
            <span className="skill-icon">03</span>
            <h3>API &amp; data</h3>
            <p>
              Validating API responses, data accuracy, and error handling, with basic SQL checks
              to confirm data is stored correctly.
            </p>
            <div className="chip-list">
              <span>Postman</span>
              <span>Swagger</span>
              <span>APIdog</span>
              <span>JSON</span>
              <span>SQL (basics)</span>
            </div>
          </article>
          <article className="skill-card">
            <span className="skill-icon">04</span>
            <h3>Responsive testing</h3>
            <p>
              Making sure websites look and work correctly across different screen sizes,
              browsers, and devices.
            </p>
            <div className="chip-list">
              <span>Responsive QA</span>
              <span>Cross-browser</span>
              <span>Chrome DevTools</span>
            </div>
          </article>
          <article className="skill-card skill-card-wide">
            <span className="skill-icon">05</span>
            <h3>QA documentation &amp; collaboration</h3>
            <p>
              Clear test plans, detailed bug reports, and concise summaries that help teams make
              confident release decisions.
            </p>
            <div className="chip-list">
              <span>Test plans</span>
              <span>Test cases</span>
              <span>Bug reports</span>
              <span>Trello</span>
              <span>Git</span>
              <span>Mentis</span>
            </div>
          </article>
        </div>
        <p className="disclaimer">
          Tools and methods I use in my day-to-day testing work.
        </p>
      </div>
    </section>
  );
}

export default Skills;
