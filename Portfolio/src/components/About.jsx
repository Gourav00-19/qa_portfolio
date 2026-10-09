function About() {
  return (
    <section className="section shell about-section" id="about">
      <div className="section-heading"><p className="eyebrow">A LITTLE ABOUT ME</p><span className="section-index mono">01 — WHO I AM</span></div>
      <div className="about-grid">
        <div className="about-copy">
          <h2>I don’t just find bugs.<br /><span>I understand the why.</span></h2>
          <p>
            I’m Gourav, a Quality Analyst with 2+ years of experience testing web applications
            and APIs. I started as a Junior Quality Analyst at Cybernauticstech and now work as an
            Associate Quality Analyst at Eminence Technology. My work covers manual, functional,
            API, database, and responsive UI testing.
          </p>
          <p>
            For me, QA is more than checking that a feature works. It’s about understanding
            requirements, business logic, user behavior, edge cases, and risks, so users get a
            reliable experience.
          </p>
          <p>
            I enjoy exploring real-world scenarios, finding issues early, and working with
            developers to fix them quickly. I use Playwright with Python to automate repetitive
            and critical scenarios and strengthen regression coverage.
          </p>
          <p>
            Whether I’m testing manually, validating APIs and data, or automating user journeys,
            my goal is simple: <strong>find problems early and help the team ship with confidence.</strong>
          </p>
        </div>
        <div className="about-highlights">
          <div className="stats-row">
            <div><strong>Risk-first</strong><span>I focus on high-impact features, critical workflows, and potential failure points.</span></div>
            <div><strong>End-to-end</strong><span>I validate quality across UI, APIs, databases, and complete user journeys.</span></div>
            <div><strong>User-focused</strong><span>I think beyond expected scenarios to uncover real-world edge cases.</span></div>
            <div><strong>Team mindset</strong><span>I collaborate with developers and stakeholders to identify, communicate, and resolve issues effectively.</span></div>
          </div>
        </div>
      </div>
      <p className="about-signoff">Think · Test · Find · Improve · Deliver</p>
    </section>
  );
}

export default About;
