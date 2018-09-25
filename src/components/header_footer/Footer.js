import React from "react";
import { TeamLogo } from "../utils/icons";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <TeamLogo width="70px" height="70px" link="/" />
      </div>
      <div className="footer_discl">
        Manchester City Soccer Club {new Date().getFullYear()} . All rights
        reserved.
      </div>
    </footer>
  );
};
export default Footer;
