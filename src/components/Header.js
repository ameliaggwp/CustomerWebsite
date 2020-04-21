import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <ul className="nav justify-content-center">
        <li className="nav-item nav-home">
          <Link to="/" className="nav-link">
            Abby P
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/videos" className="nav-link">
            Videos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
