import useReveal from "../hooks/useReveal";
import SectionHead from "./SectionHead";
import { quickLinks } from "../data/content";

export default function QuickLinksSection() {
  const ref = useReveal();
  return (
    <section className="section">
      <div className="site-container">
        <SectionHead eyebrow="Student Portal" title="Quick Access" />
        <div ref={ref} className="ql-grid reveal">
          {quickLinks.map((ql) => (
            <a key={ql.label} href="#" className="ql-card">
              <div className="ql-icon">
                <i className={`ti ${ql.icon}`} aria-hidden="true" />
              </div>
              <span className="ql-label">{ql.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
