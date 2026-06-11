import useReveal from "../hooks/useReveal";
import SectionHead from "./SectionHead";
import { events } from "../data/content";

export default function EventsSection() {
  const ref = useReveal();
  return (
    <section className="section" >
      <div className="site-container">
        <SectionHead eyebrow="Schedule" title="Upcoming Events" moreLabel="Full calendar" />
        <div ref={ref} className="events-grid reveal">
          {events.map((ev, i) => (
            <div key={i} className="event-card">
              <div className="event-datebox">
                <div className="event-day">{ev.day}</div>
                <div className="event-mon">{ev.month}</div>
              </div>
              <div>
                <h3 className="event-title">{ev.title}</h3>
                <p className="event-venue">
                  <i className="ti ti-map-pin" style={{ fontSize: 12 }} aria-hidden="true" />
                  {ev.venue}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
