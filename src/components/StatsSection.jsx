import useReveal from "../hooks/useReveal";
import { stats } from "../data/content";

export default function StatsSection() {
  const ref = useReveal();
  console.log(stats);
  return (
    <section className="section">
      <div className="site-container">
        <div ref={ref} className="stats-grid reveal">
          {stats.map((s, i) => (
            <div key={s.label} className={`stat-card reveal reveal-delay-${i}`}>
            {/* <div key={s.label} className="stat-card"> */}
              <div className="stat-num">{s.num}</div>
              
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
