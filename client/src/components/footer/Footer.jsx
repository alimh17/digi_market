import React from "react";
import Application from "./components/application/Application";
import SocialContact from "./components/social_contact/SocialContact";
import WayContact from "./components/way_contact/WayContact";

//styleSheet
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className="flex flex-col md:grid grid-rows-3 grid-cols-3  -mt-1 md:h-96 font-sans">
      <Application style={style} />
      <WayContact />
      <SocialContact />
    </footer>
  );
};

export default Footer;
