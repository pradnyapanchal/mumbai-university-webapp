import useReveal from "../hooks/useReveal";
import SectionHead from "./SectionHead";
import { notifications } from "../data/content";

export default function NotificationsSection() {
  const ref = useReveal();
  return (
    <section className="section" >
      <div className="site-container">
        <div ref={ref} className="reveal">
          <SectionHead eyebrow="Announcements" title="Notifications" moreLabel="View all" />
          <div className="notif-list">
            {notifications.map((n, i) => (
              <div key={i} className="notif-item">
                <span className={`notif-dot${n.isNew ? "" : " read"}`} aria-hidden="true" />
                <span className="notif-text">{n.text}</span>
                {n.isNew && <span className="notif-badge">New</span>}
                <i className="ti ti-chevron-right notif-arrow" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
