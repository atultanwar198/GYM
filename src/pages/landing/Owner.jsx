import "./Owner.css";

const ownerHighlights = [
  "Certified coaches with athlete-first coaching systems",
  "15+ years of experience across strength, cardio, and recovery",
  "Premium equipment, clean training spaces, and results-focused programming",
];

const facilityNotes = [
  "Strength zone with Olympic racks and free weights",
  "Functional training and conditioning area",
  "Mobility, yoga, and recovery lounge",
  "Smart tracking, member check-ins, and personalized plans",
];

function Owner() {
  return (
    <div className="owner_page">
      <div className="owner_intro">
        <span className="owner_eyebrow">About us</span>
        <h2>Built for people who want real progress, not just workouts.</h2>
        <p>
          Aayu blends premium training environments, expert coaching, and a
          disciplined fitness culture designed to help members build strength,
          confidence, and sustainable routines.
        </p>
      </div>

      <article className="owner_card">
        <div className="owner_image_wrap">
          <div className="owner_image_section">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=900&q=80"
              alt="Aayu training floor and coaching environment"
            />
          </div>
          <div className="owner_stat">
            <strong>15+</strong>
            <span>Years of coaching, transformation, and facility excellence</span>
          </div>
        </div>

        <div className="owner_content">
          <span className="owner_badge">Our philosophy</span>
          <h3>Train with purpose. Recover with intention.</h3>

          <p className="owner_description">
            Every session at Aayu is built around coaching that is personal,
            measurable, and motivating. We combine strength, conditioning, and
            recovery in one premium space so your progress feels sustainable and
            visible.
          </p>

          <div className="owner_achievements">
            <h4>Facilities & equipment</h4>
            <ul>
              {facilityNotes.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="owner_achievements owner_achievements--secondary">
            <h4>Experience & achievements</h4>
            <ul>
              {ownerHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <blockquote className="owner_quote">
            We help people become stronger, sharper, and more confident — one
            focused session at a time.
          </blockquote>
        </div>
      </article>
    </div>
  );
}

export default Owner;
