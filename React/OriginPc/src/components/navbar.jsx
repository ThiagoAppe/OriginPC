import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Navbar, Nav, Collapse } from "react-bootstrap";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from '../assets/origin-logo.svg';

export function NavbarWithSolidBackground() {
  const [openNav, setOpenNav] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  useEffect(() => {
    if (openNav) {
      setShowButton(false);
      setTimeout(() => {
        setShowButton(true);
      }, 200);
    } else {
      setShowButton(false);
    }
  }, [openNav]);

  const navList = (
    <Nav className="mb-2 mt-2 d-flex gap-4 align-items-center">
      <Nav.Item>
        <Nav.Link as={Link} to="/" className="text-white">
          Inicio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/mainProductos" className="text-white">
          Productos
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/contact" className="text-white">
          Contacto
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

  return (
    <div className=" bg-dark">
      <Navbar className="sticky-top bg-black navbar-expand-lg">
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100 align-items-center">
            {/* Logo */}
            <div className="d-flex align-items-center">
              <img className="h-14" src={logo} alt="Logo" />
            </div>

            {/* Navbar Items */}
            <div className="d-none d-lg-flex align-items-center">
              {navList}
              <Button style={{ backgroundColor: '#cc181e' }} variant="danger" size="sm" className="ms-3">
                Arma tu PC
              </Button>
            </div>

            {/* Mobile Navbar */}
            <Button
              variant="link"
              className="d-lg-none text-white"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </Button>
          </div>

          {/* Menu Hamburgesa Mobile */}
          <Collapse in={openNav}>
            <div className="flex" >
              {navList}
              {openNav && showButton && (
              <Button style={{ backgroundColor: '#cc181e' }} variant="danger" size="sm" className="ms-3">
              Arma tu PC
            </Button>
              )}
            </div>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}
