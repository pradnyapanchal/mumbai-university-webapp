export default function SectionHead({ eyebrow, title, moreLabel, moreHref = "#" }) {
  return (
    <div className="section-header">
      <div>
        {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
        <h2 className="section-title">{title}</h2>
      </div>
      {moreLabel && (
        <a href={moreHref} className="section-more">
          {moreLabel}
          <i className="ti ti-arrow-right" style={{ fontSize: 13 }} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
