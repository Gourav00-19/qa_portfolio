function Experience() {
  return (
    <section className="section shell experience-section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">CAREER JOURNEY</p>
        <span className="section-index mono">03 — EXPERIENCE</span>
      </div>
      <div className="work-heading">
        <h2>
          Testing real software.
          <br />
          <span>Improving every release.</span>
        </h2>
        <p>
          Hands-on QA experience in functional testing, API testing, and close collaboration
          with developers.
        </p>
      </div>
      <div className="timeline">
        <article className="timeline-item">
          <span className="timeline-marker" />
          <div className="timeline-card">
            <div className="timeline-meta">
              <span>ASSOCIATE QUALITY ANALYST · EMINENCE TECHNOLOGY</span>
              <span>March 2025 – Present</span>
            </div>
            <h3>Associate Quality Analyst</h3>
            <p>
              Working as part of the QA team to make sure software meets user needs and works
              reliably before release.
            </p>
            <ul>
              <li>Review user requirements and system designs to create meaningful test scenarios.</li>
              <li>Write and execute test plans and test cases to verify that features work as expected.</li>
              <li>Analyze the development process to find ways to make testing more accurate and efficient.</li>
              <li>Report and track bugs using Mantis.</li>
              <li>Work closely with developers to catch and fix issues early in the development cycle.</li>
            </ul>
          </div>
        </article>
        <article className="timeline-item">
          <span className="timeline-marker" />
          <div className="timeline-card">
            <div className="timeline-meta">
              <span>JUNIOR QUALITY ANALYST · CYBERNAUTICSTECH PVT. LTD.</span>
              <span>June 2024 – February 2025</span>
            </div>
            <h3>Junior Quality Analyst</h3>
            <p>
              Started my QA career testing web applications and APIs and supporting the team
              with defect reporting.
            </p>
            <ul>
              <li>Performed functional and API testing using Postman.</li>
              <li>Logged and tracked bugs through Mantis.</li>
              <li>
                Collaborated with developers on early defect detection, which helped improve
                build stability.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;
