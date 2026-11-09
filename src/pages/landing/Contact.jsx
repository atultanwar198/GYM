import "./Contact.css";

const contactDetails = [
  {
    label: "Mobile No",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    label: "Email",
    value: "hello@club24fitness.com",
    href: "mailto:hello@club24fitness.com",
  },
  {
    label: "Location",
    value: "Aayu Performance Studio, Main Road, New Delhi",
  },
  {
    label: "Time",
    value: "Mon - Sat: 5:00 AM - 11:00 PM",
  },
];

function Contact() {
  return (
    <div className="contact_page">
      <div className="contact_shell">
        <div className="contact_intro_panel">
          <span className="contact_eyebrow">Free trial</span>
          <h2>Book your first session</h2>
          <p>
            No forms. No account needed. Talk to our team directly and we’ll
            help you choose a membership, trainer, or trial session.
          </p>

          <div className="contact_direct-actions">
            <a href="tel:+919876543210">Call to book <span>↗</span></a>
            <a href="mailto:hello@club24fitness.com">Email our team <span>↗</span></a>
          </div>
        </div>

        <aside className="contact_info_panel">
          <span className="contact_eyebrow contact_eyebrow_light">
            Visit us
          </span>
          <h2>We are ready to help you start.</h2>
          <p>
            Visit us or call our front desk. We will
            guide you through plans, timings, and trainer availability.
          </p>

          <div className="contact_details">
            {contactDetails.map((detail) => (
              <div className="contact_detail" key={detail.label}>
                <span>{detail.label}</span>
                {detail.href ? (
                  <a href={detail.href}>{detail.value}</a>
                ) : (
                  <strong>{detail.value}</strong>
                )}
              </div>
            ))}
          </div>

          <div className="contact_map">
            <iframe
              title="Aayu location"
              src="https://www.google.com/maps?q=New%20Delhi&z=12&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Contact;
