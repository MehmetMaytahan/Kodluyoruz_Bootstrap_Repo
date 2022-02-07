import React from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  Collapse,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Container,
} from "reactstrap";

function Navi() {
  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top">
        <Container>
          <Collapse navbar>
            <NavbarBrand></NavbarBrand>
            <NavbarToggler />
            <Nav navbar>
              <NavItem>
                <NavLink to="/" className="nav-link active">
                  GameStone Store
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" className="nav-link active">
                  Home Page
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/products" className="nav-link active">
                  Products
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" className="nav-link active">
                  About
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;
