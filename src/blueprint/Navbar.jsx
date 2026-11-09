import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/dumble.png";
import "./Navbar.css";

function Navbar({
  brand = "AAYU",
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
      <a className="navbar__brand" href="/" aria-label="Aayu home">
        <img className="navbar__logo" src={logo} alt="Aayu logo" />
        <span>
          {brand}
          <small>Performance Studio</small>
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
