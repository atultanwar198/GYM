import "./Trainers.css";

const trainers = [
  {
    name: "Ava Thompson",
    role: "Strength Coach",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=80",
    specialty: "Progressive strength plans, compound lifts, and safe form",
    stats: "1,200+ sessions",
    tags: ["Strength", "Form", "Hypertrophy"],
  },
  {
    name: "Ryan Carter",
    role: "HIIT & Conditioning Coach",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    specialty: "High-energy circuits built for endurance and fat loss",
    stats: "8 years coaching",
    tags: ["HIIT", "Cardio", "Mobility"],
  },
  {
    name: "Maya Singh",
    role: "Transformation Coach",
    image:
      "https://images.unsplash.com/photo-1609899464726-209befaac5c0?auto=format&fit=crop&w=900&q=80",
    specialty: "Beginner-friendly programs with nutrition accountability",
    stats: "300+ transformations",
    tags: ["Weight Loss", "Nutrition", "Habits"],
  },
];

function Trainers() {
  return (
    <div className="trainers_page">
      <div className="trainers_header">
        <span className="trainers_eyebrow">Expert trainers</span>
        <h2>Coaches who know when to push and when to adjust.</h2>
        <p>
          Work with certified trainers who match your fitness level, track your
          progress, and keep every session focused on results.
        </p>
      </div>

      <div className="trainers_grid">
        {trainers.map((trainer) => (
          <article className="trainer_card" key={trainer.name}>
            <div className="trainer_image">
              <img
                src={trainer.image}
                alt={`${trainer.name}, ${trainer.role}`}
              />
            </div>

            <div className="trainer_content">
              <span className="trainer_role">{trainer.role}</span>
              <h3>{trainer.name}</h3>
              <p>{trainer.specialty}</p>

              <div
                className="trainer_tags"
                aria-label={`${trainer.name} specialties`}
              >
                {trainer.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="trainer_footer">
                <strong>{trainer.stats}</strong>
                <a href="#contact">Book Session</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Trainers;
