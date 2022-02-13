import React from "react";
import Logo from "./Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Upgrade your internet" height={70} width={70} />
      <h1>
        <span className="raza">RAZA </span>
        <span className="ent"> ENTERPRISES</span>
      </h1>
      <button type="submit" className="log">
        Log Off
      </button>
    </div>
  );
};

export default Header;
