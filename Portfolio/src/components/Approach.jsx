function Approach() {
  return (
    <section className="section shell approach-section" id="approach">
      <div className="section-heading"><p className="eyebrow">A PRACTICAL APPROACH</p><span className="section-index mono">05 — THE PROCESS</span></div>
      <div className="approach-intro">
        <h2>
          How I work.
          <br />
          <span>How I test.</span>
        </h2>
        <p>Clear thinking, useful feedback, and the right test at the right time.</p>
      </div>
      <div className="process-list">
        <article className="process-item">
          <span className="process-number mono">01</span>
          <div>
            <h3>I ask questions first</h3>
            <p>
              Before testing, I make sure I understand what the feature should do, who will use
              it, and where it could go wrong.
            </p>
          </div>
          <span className="process-symbol" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
          </span>
        </article>
        <article className="process-item">
          <span className="process-number mono">02</span>
          <div>
            <h3>I think like a user</h3>
            <p>
              I explore the product the way real users would, then add repeatable checks for
              the things that matter most.
            </p>
          </div>
          <span className="process-symbol" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="10" r="3" />
              <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
            </svg>
          </span>
        </article>
        <article className="process-item">
          <span className="process-number mono">03</span>
          <div>
            <h3>I make bugs easy to fix</h3>
            <p>
              Every report has clear steps, expected vs. actual results, and evidence, so
              developers don't have to guess.
            </p>
          </div>
          <span className="process-symbol" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
          </span>
        </article>
        <article className="process-item">
          <span className="process-number mono">04</span>
          <div>
            <h3>I stay close to the team</h3>
            <p>
              I work with developers early, so issues are caught and fixed before they reach
              users.
            </p>
          </div>
          <span className="process-symbol" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
          </span>
        </article>
      </div>
    </section>
  );
}

export default Approach;
