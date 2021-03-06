import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../auth/Logout";
import logo from "../../assets/logo/logo1.png";
import { FaUserAlt } from "react-icons/fa";

function Navigation() {
  const { user } = useContext(AuthContext);
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} className="logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav navigation__navbar--toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/" exact className="nav-link">
            Home
          </NavLink>

          <NavLink to="/accommodation/" className="nav-link">
            Accommodation
          </NavLink>

          {user ? (
            <>
              <div className="nav-link__admin">
                <NavLink to="/admin" className="nav-link__dashboard">
                  Dashboard
                </NavLink>

                <Logout />
              </div>
            </>
          ) : (
            <>
              <NavLink to="/contact/" className="nav-link">
                Contact
              </NavLink>

              <NavLink to="/register" className="nav-link">
                <FaUserAlt className="nav__icon" />
                Login
              </NavLink>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
