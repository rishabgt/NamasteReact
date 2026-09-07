import logo from "../assets/protein_logo.png";
import { useState } from "react";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="protein-chef logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="btn btn-login"
            onClick={() => {
              btnText === "Logout" ? setBtnText("Login") : setBtnText("Logout");
            }}
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
