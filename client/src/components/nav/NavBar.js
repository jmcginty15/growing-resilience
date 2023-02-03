import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as NavLogo } from "../../assets/logo-grp.svg";
import "./NavBar.css";

const NavBar = ({ scrollToTop }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  const goTo = (route, toContact = false, fromAbout = false) => {
    navigate(route, false);
    scrollToTop(toContact, fromAbout);
  };

  return (
    <div className="NavBar">
      <Navbar className="navbar-dark" id="Nav" expand="lg" fixed="top">
        <NavbarBrand href="/" id="brand-logo-container">
          <NavLogo id="brand-logo" height={60} />
        </NavbarBrand>
        <NavbarToggler onClick={toggleOpen} />
        <Collapse isOpen={open} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem className="NavBar-item">
              <NavLink onClick={() => goTo("/about")}>
                <span className="NavBar-link">About GRP</span>
              </NavLink>
            </NavItem>
            <NavItem className="NavBar-item">
              <NavLink onClick={() => goTo("/guides")}>
                <span className="NavBar-link">Guides</span>
              </NavLink>
            </NavItem>
            <NavItem className="NavBar-item">
              <NavLink onClick={() => goTo("/podcast")}>
                <span className="NavBar-link">Podcast</span>
              </NavLink>
            </NavItem>
            <NavItem className="NavBar-item">
              <NavLink
                onClick={() =>
                  goTo("/about", true, location.pathname === "/about")
                }
              >
                <span className="NavBar-link">Contact</span>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
