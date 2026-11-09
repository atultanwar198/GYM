import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/dumble.png";
import "./Navbar.css";

function Navbar({
  brand = "CLUB 24",
  links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Coaches", href: "#trainers" },
    { label: "Contact", href: "#contact" },
  ],
  ctaLabel = "Join Now",
  ctaHref = "#contact",
}) {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="navbar__brand" href="/" aria-label="Club 24 home">
        <img className="navbar__logo" src={logo} alt="Club 24 logo" />
        <span>
          {brand}
          <small>Fitness Studio</small>
        </span>
      </a>

      <ul className="navbar__links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="navbar__actions">
        <a className="navbar__cta" href={ctaHref}>
          <span>{ctaLabel}</span>
          <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
