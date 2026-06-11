import { footerCols, socials } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="site-container">

        {/* Top grid: brand + link columns */}
        <div className="footer-top">

          {/* Brand column */}
          <div>
            <div className="footer-divide">

            <div>

            <div className="footer-brand-emblem" aria-label="MU Logo">  <img   src="/mumbai-university-webapp/logo.png"
  className="w-10 h-8"
 alt="" srcSet="" /></div>
            </ div>
            <div>

            <div className="footer-brand-name">University of Mumbai</div>
            <div className="footer-brand-hi">मुंबई विद्यापीठ</div>
            </div>
            </div>
            <address className="footer-brand-addr" style={{ fontStyle: "normal" }}>
              Rajabai Tower, Fort<br />
              Mumbai – 400 032<br />
              Maharashtra, India<br />
              <a href="tel:02222654919" style={{ color: "inherit" }}>+91 22 2265 4919</a>
            </address>
            {/* Socials */}
            <div className="footer-socials">
              {socials.map((s) => (
                <a key={s.label} href="#" className="footer-social-icon" aria-label={s.label}>
                  <i className={`ti ${s.icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <div className="footer-col-title">{col.title}</div>
              {col.links.map((link) => (
                <a key={link} href="#" className="footer-link">{link}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© 2026 University of Mumbai. All rights reserved.</span>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
