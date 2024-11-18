import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
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
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to="/" className="flex items-center">
          Inicio
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to="/contact" className="flex items-center">
          Contacto
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="bg-slate-700">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-black">
        <div className="flex items-center justify-between text-white">
          <div className="block">
            <img className="h-14" src={logo} alt="Logo WEBP" />
          </div>

          <div className="mr-4 hidden lg:block">{navList}</div>

          <Button variant="filled" size="sm" className="hidden lg:inline-block rounded bg-red-600 text-white">
            <span>Arma tu PC</span>
          </Button>

          {/* Icono de menú para mobile */}
          <IconButton
            variant="text"
            className="lg:hidden text-gray-400"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>

        <Collapse open={openNav} className="lg:hidden">
          {navList}
          {openNav && showButton && (
            <Button variant="filled" size="sm" className="block lg:hidden rounded bg-red-600 text-white">
              <span>Arma tu PC</span>
            </Button>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}
