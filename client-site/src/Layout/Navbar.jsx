import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";

let menuList = ["", "Blog", "Dashboard", "Login", "SignUp"];
function MyNavbar() {
  const [menuName, setMenuName] = useState(null);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav>
          <NavLink className="navbar-brand" to="/">
            My Website
          </NavLink>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuList?.map((menu, ind) => {
              return (
                <Nav.Link key={ind}>
                  <NavLink
                    className={` text-center  link ${menuName == menu ? "active" : null}`}
                    to={menu == "" ? "/" : `/${menu}`}
                    onClick={() => setMenuName(menu)}
                  >
                    {menu == "" ? "Home" : menu}
                  </NavLink>
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
