export default function AlertStrip() {
  return (
    <div className="alert-strip">
      <div className="site-container">
        <div className="alert-inner">
          <i className="ti ti-speakerphone" style={{ fontSize: 16, color: "var(--teal)", flexShrink: 0, marginTop: 1 }} aria-hidden="true" />
          <span>
            <strong>Notice:</strong> LL.M. CET 2026–27 Hall Tickets are now available for download on the Examination Portal.
          </span>
        </div>
      </div>
    </div>
  );
}
