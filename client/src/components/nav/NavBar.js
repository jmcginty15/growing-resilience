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
import { useNavigate } from "react-router-dom";
import { ReactComponent as NavLogo } from "../../assets/logo.svg";
import "./NavBar.css";

const NavBar = ({ scrollToTop }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  const goTo = (route) => {
    navigate(route, false);
    scrollToTop();
  };

  return (
    <div className="NavBar">
      <Navbar id="Nav" expand="lg" fixed="top">
        <NavbarBrand href="/" id="brand-logo-container">
          <NavLogo id="brand-logo" height={50} />
        </NavbarBrand>
        <NavbarToggler onClick={toggleOpen} />
        <Collapse isOpen={open} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem className="NavBar-item">
              <NavLink onClick={() => goTo("/about")}>
                <span className="NavBar-link">About GR</span>
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
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
