import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer({
  brand = "Club 24",
  text = "Train harder, recover smarter, and feel stronger every day.",
}) {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <div className="footer__badge">CLUB 24</div>
        <h2 className="footer__title">{brand}</h2>
        <p className="footer__text">{text}</p>

        <div className="footer__socials" aria-label="Social links">
          <a href="https://www.instagram.com" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>

      <div className="footer__contact">
        <h3>Contact</h3>
        <p>
          <FontAwesomeIcon icon={faPhone} />
          +91 98765 43210
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          hello@club24.com
        </p>
        <p>
          <FontAwesomeIcon icon={faLocationDot} />
          Your City, India
        </p>
      </div>
    </footer>
  );
}

export default Footer;
