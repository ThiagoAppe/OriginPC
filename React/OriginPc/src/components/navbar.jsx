import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; // Importa Link

export function NavbarWithSolidBackground() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to="/contact" className="flex items-center">
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      {/* Actualizamos el color de fondo a bg-slate-700 */}
      <Navbar className="sticky top-0 z-10 h-max max-w-full bg-slate-700 rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-white"> {/* Cambié a text-white para contraste */}
          <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
            Material Tailwind
          </Typography>

          {/* NavList visible on large screens */}
          <div className="mr-4 hidden lg:block">{navList}</div>

          {/* Button to trigger mobile nav collapse */}
          <Button variant="gradient" size="sm" className="hidden lg:inline-block">
            <span>Get started</span>
          </Button>

          {/* Mobile icon button for collapsing navigation */}
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>

        {/* Collapse component for mobile */}
        <Collapse open={openNav} className="lg:hidden">
          {navList}
          <Button fullWidth variant="gradient" size="sm">
            <span>Get started</span>
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}
