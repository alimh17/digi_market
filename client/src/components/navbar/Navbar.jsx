import React, { useState } from "react";
import NavbarUp from "./components/NavbarUp";
import NavbarDown from "./components/NavbarDown";
import MobileMenu from "./components/MobileMenu";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="w-full flex flex-col border-b-2 md:h-32 items-center md:fixed top-0 p-3 z-10 bg-white font-sans">
      <MobileMenu hidden={setMobileMenu} show={mobileMenu} />
      <NavbarUp show={setMobileMenu} />
      <NavbarDown />
    </nav>
  );
};

export default Navbar;
