import useReveal from "../hooks/useReveal";
import SectionHead from "./SectionHead";
import { news } from "../data/content";

export default function NewsSection() {
  const ref = useReveal();
  return (
    <section className="section">
      <div className="site-container">
        <SectionHead eyebrow="Latest" title="News & Press" moreLabel="All news" />
        <div ref={ref} className="news-grid reveal">
          {news.map((item, i) => (
            <article key={i} className="news-card">
              <div className="news-date-row">
                <div className="news-datebox">
                  <div className="news-datebox-day">{item.day}</div>
                  <div className="news-datebox-mon">{item.month}</div>
                </div>
                <span className="news-cat">{item.category}</span>
              </div>
              <p className="news-title">{item.title}</p>
              <span className="news-read">
                Read more <i className="ti ti-arrow-right" style={{ fontSize: 12 }} aria-hidden="true" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
