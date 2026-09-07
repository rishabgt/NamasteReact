import logo from "../assets/protein_logo.png";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="protein-chef logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
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
