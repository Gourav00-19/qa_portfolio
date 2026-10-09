function SiteFooter({ homeHref = "#home" }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a className="brand footer-brand" href={homeHref}>
          <span className="brand-mark">G</span>
          <span className="brand-name">GOURAV<span>/QA</span></span>
        </a>
        <p>Thoughtful testing. Better software.</p>
        <a className="back-top mono" href={homeHref}>BACK TO TOP ↑</a>
        <small>© {new Date().getFullYear()} GOURAV. QA PORTFOLIO.</small>
      </div>
    </footer>
  );
}

export default SiteFooter;
