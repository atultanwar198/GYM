import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleWhole,
  faCalendarCheck,
  faClock,
  faDumbbell,
  faHeartPulse,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import dumbbell from "../../assets/dumble.png";
import herovideo from "../../assets/hero_video.mp4";
import "./Hero.css";

const features = [
  {
    icon: faClock,
    title: "Flexible Time",
    text: "Train on a schedule that fits your day, from early morning sessions to evening workouts.",
  },
  {
    icon: faUserTie,
    title: "Expert Trainers",
    text: "Work with coaches who guide your form, plan your progress, and keep you accountable.",
  },
  {
    icon: faAppleWhole,
    title: "Diet Support",
    text: "Get practical nutrition guidance that supports strength, fat loss, and better daily energy.",
  },
  {
    icon: faDumbbell,
    title: "Modern Equipment",
    text: "Use clean, well-maintained equipment for strength training, cardio, and functional fitness.",
  },
  {
    icon: faCalendarCheck,
    title: "Workout Plans",
    text: "Follow structured programs designed for beginners, regular members, and serious lifters.",
  },
  {
    icon: faHeartPulse,
    title: "Progress Tracking",
    text: "Track improvements in stamina, strength, and consistency with simple member check-ins.",
  },
];

function Hero() {
  return (
    <div className="Home">
      <div className="hero_section">
        <div className="left_section">
          <div className="hero-kicker">
            <span className="hero-kicker__dot" />
            Built for the ones who show up
          </div>
          <h1>
            BUILT TO
            <br />
            <span>BREAK</span> LIMITS.
          </h1>
          <h3>Earn every rep. Own every result.</h3>
          <div className="hero_promo">
            <span className="hero_promo-badge">Your first week is on us</span>
            <span>Expert coaching · No joining fees</span>
          </div>
          <p>
            No shortcuts. No soft starts. Just serious coaching, elite equipment,
            and a crew that pushes you past your old limits.
          </p>
          <div className="hero_buttons">
            <a className="hero_button hero_button--primary" href="#contact">
              Start your trial <span aria-hidden="true">↗</span>
            </a>
            <a className="hero_button hero_button--secondary" href="#trainers">
              Meet your coaches
            </a>
          </div>
          <div className="other_info">
            <div className="info_section">
              <h4 className="i_s_h" data-count="500">500+</h4>
              <span className="i_s_p">Athletes in the crew</span>
            </div>
            <div className="info_section">
              <h4 className="i_s_h" data-count="50">50+</h4>
              <span className="i_s_p">Expert coaches</span>
            </div>
            <div className="info_section">
              <h4 className="i_s_h" data-count="4.9">4.9/5</h4>
              <span className="i_s_p">Member rating</span>
            </div>
          </div>
        </div>

        <div className="right_section">
          <div className="hero-visual">
            <video
              className="hero_video"
              src={herovideo}
              autoPlay
              loop
              muted
              playsInline
              aria-label="Athletes training at Club 24"
            />
            <div className="hero-visual__topline">
              <span>CLUB 24 / PERFORMANCE CLUB</span>
              <span>01 — 04</span>
            </div>
            <div className="hero-visual__caption">
              <span>THE WORK SPEAKS</span>
              <strong>NO DAYS<br />ON THE SIDELINE.</strong>
            </div>
            <div className="hero-gear" aria-label="Three-dimensional dumbbell graphic">
              <span className="hero-gear__halo" />
              <img src={dumbbell} alt="" />
              <span className="hero-gear__tag">LOAD UP / LEVEL UP</span>
            </div>
            <span className="hero-visual__vertical">STRENGTH · CONDITIONING · COMMUNITY</span>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="features-heading">
          <span className="features-heading__eyebrow">Built around your goals</span>
          <h2>MORE THAN A GYM.<br /><span>A TRAINING ADVANTAGE.</span></h2>
        </div>
        <div className="Our_features">
          {features.map((feature, index) => (
            <article className="feature_card" key={feature.title}>
              <span className="feature_number">0{index + 1}</span>
              <span className="feature_icon" aria-hidden="true">
                <FontAwesomeIcon icon={feature.icon} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>

      <section className="equipment-section" aria-labelledby="equipment-title">
        <div className="equipment-heading">
          <div>
            <span className="section-eyebrow">THE RIGHT TOOLS. NO EXCUSES.</span>
            <h2 id="equipment-title">MEET YOUR<br /><span>NEW PR.</span></h2>
          </div>
          <p>Purpose-built equipment. Serious training floor. Every detail is here to make your next rep count.</p>
        </div>
        <div className="equipment-grid">
          <article className="equipment-card equipment-card--dumbbell">
            <div className="equipment-card__art">
              <span className="equipment-card__orbit" />
              <img src={dumbbell} alt="Dumbbell" />
            </div>
            <div className="equipment-card__content">
              <span>01 / FREE WEIGHTS</span>
              <h3>Dumbbells</h3>
              <p>Small increments. Big-time strength gains.</p>
            </div>
            <a href="#contact" aria-label="Ask about dumbbell training">↗</a>
          </article>
          <article className="equipment-card equipment-card--barbell">
            <div className="equipment-card__art" aria-hidden="true">
              <div className="barbell-model">
                <span className="barbell-model__plate" />
                <span className="barbell-model__collar" />
                <span className="barbell-model__shaft" />
                <span className="barbell-model__collar" />
                <span className="barbell-model__plate" />
              </div>
            </div>
            <div className="equipment-card__content">
              <span>02 / COMPOUND LIFTS</span>
              <h3>Olympic bars</h3>
              <p>Built for your heaviest, cleanest lifts.</p>
            </div>
            <a href="#contact" aria-label="Ask about Olympic bar training">↗</a>
          </article>
          <article className="equipment-card equipment-card--plates">
            <div className="equipment-card__art" aria-hidden="true">
              <div className="plate-model">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="equipment-card__content">
              <span>03 / PROGRESSIVE LOAD</span>
              <h3>Weight plates</h3>
              <p>Add the load. Build the discipline.</p>
            </div>
            <a href="#contact" aria-label="Ask about weight plate training">↗</a>
          </article>
        </div>
        <p className="equipment-note"><span>+</span> Explore every piece. Your next set is waiting.</p>
      </section>

      <a className="floating-cta" href="#contact">
        Join now
      </a>
    </div>
  );
}

export default Hero;
