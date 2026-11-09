import Hero from "./Hero";
import Owner from "./Owner";
import Trainers from "./Trainers";
import Contact from "./Contact";

import Footer from "../../blueprint/Footer";
import Navbar from "../../blueprint/Navbar";
import "./Landing.css";

const programs = [
  {
    title: "Weight Training",
    text: "Build strength with structured progressive overload and expert coaching for every level.",
  },
  {
    title: "Personal Training",
    text: "Get one-to-one guidance, accountability, and programming tailored to your goals and pace.",
  },
  {
    title: "Cardio Training",
    text: "Improve endurance, stamina, and conditioning using high-performance classes and equipment.",
  },
  {
    title: "CrossFit",
    text: "Train with intensity in a dynamic environment for strength, power, and athletic performance.",
  },
  {
    title: "Yoga & Mobility",
    text: "Recover better, improve flexibility, and support long-term performance with mindful movement.",
  },
  {
    title: "Zumba Energy",
    text: "Burn calories and stay motivated in high-energy dance fitness sessions built for fun.",
  },
];

const plans = [
  {
    name: "Monthly",
    price: "₹1,999",
    tag: "Starter",
    perks: ["Gym access", "Locker & showers", "2 group classes"],
  },
  {
    name: "Quarterly",
    price: "₹5,499",
    tag: "Popular",
    perks: ["Everything in Monthly", "1 PT session", "Priority booking"],
    featured: true,
  },
  {
    name: "Half-Yearly",
    price: "₹10,299",
    tag: "Best Value",
    perks: [
      "Everything in Quarterly",
      "Nutrition check-in",
      "Complimentary fitness test",
    ],
  },
  {
    name: "Annual",
    price: "₹18,999",
    tag: "Elite",
    perks: ["Unlimited classes", "VIP trainer support", "Exclusive events"],
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=80",
];

function Landing() {
  return (
    <div className="landing-page">
      <Navbar />
      <main className="landing-page__content">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <Owner />
        </section>

        <section id="programs" className="programs-section">
          <div className="section-heading">
            <span>Training programs</span>
            <h2>Choose your path to peak performance.</h2>
          </div>

          <div className="programs-grid">
            {programs.map((program) => (
              <article key={program.title} className="program-card">
                <div className="program-icon">+</div>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="trainers">
          <Trainers />
        </section>

        <section id="plans" className="pricing-section">
          <div className="section-heading">
            <span>Membership plans</span>
            <h2>Premium access built around your goals.</h2>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={
                  plan.featured
                    ? "pricing-card pricing-card--featured"
                    : "pricing-card"
                }
              >
                <p className="pricing-tag">{plan.tag}</p>
                <h3>{plan.name}</h3>
                <div className="pricing-price">
                  {plan.price}
                  <span>/month</span>
                </div>
                <ul>
                  {plan.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
                <a className="pricing-card__link" href="#contact">
                  Ask about this plan
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="gallery-section">
          <div className="section-heading">
            <span>Transformation gallery</span>
            <h2>Real effort. Real results. Real community.</h2>
          </div>

          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <figure
                key={image}
                className={
                  index === 0
                    ? "gallery-item gallery-item--wide"
                    : "gallery-item"
                }
              >
                <img
                  src={image}
                  alt="Club 24 training and transformation moments"
                />
              </figure>
            ))}
          </div>
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
