import React from "react";
import Logo from "./Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Upgrade your internet" height={70} width={70} />
      <button type="submit">Log Off</button>
      <h1>Hello World</h1>
    </div>
  );
};

export default Header;
