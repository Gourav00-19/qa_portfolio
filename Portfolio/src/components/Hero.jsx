const expertise = ["QUALITY ENGINEERING", "TEST AUTOMATION", "API TESTING", "RELEASE CONFIDENCE"];

function ExpertiseTicker() {
  const renderGroup = () =>
    expertise.flatMap((item, index) => [
      <span key={`${item}-${index}`}>{item}</span>,
      <b key={`separator-${index}`} aria-hidden="true">✳</b>,
    ]);

  return (
    <section className="ticker" aria-label="Areas of expertise">
      <div className="ticker-track">
        <div className="ticker-group">{renderGroup()}{renderGroup()}</div>
        <div className="ticker-group" aria-hidden="true">{renderGroup()}{renderGroup()}</div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <>
      <section className="hero shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> QA ENGINEER · 2+ YEARS EXPERIENCE · OPEN TO OPPORTUNITIES</p>
          <h1 className="hero-title">I find the <span className="highlight">bugs</span><br />before your users do.</h1>
          <p className="hero-intro">
            I’m <strong>Gourav</strong>, a QA Engineer focused on delivering reliable, user-friendly
            software through manual testing, functional testing, API testing, database validation,
            and test automation.
          </p>
          <p className="hero-tool-list">Manual Testing · Functional Testing · Playwright · Python · API Testing · Git</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore My Work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="resume.html">View Resume <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-note"><span className="mono">01 / 03</span><span>Think · Test · Improve</span></div>
        </div>
        <div className="hero-art" role="img" aria-label="QA quality check illustration">
          <div className="art-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-core"><span>QA</span><span className="core-check">✓</span></div>
          <div className="float-card card-pass"><span className="card-icon">✓</span><span><b>Build passed</b><small>All checks green</small></span><i /></div>
          <div className="float-card card-test"><span className="terminal-icon">&gt;_</span><span><b>Test suite</b><small>Coverage in progress</small></span></div>
          <span className="art-label label-top mono">QUALITY IS A FEATURE</span>
          <span className="art-label label-bottom mono">THINK · TEST · SHIP</span>
        </div>
      </section>
      <ExpertiseTicker />
    </>
  );
}

export default Hero;
