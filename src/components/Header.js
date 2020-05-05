import React from "react";

const Header = () => {
  return (
    <div className="header">
      <ul className="nav justify-content-center">
        <li className="nav-item nav-home">
          <a href="#About" className="nav-link">
            Abby P
          </a>
        </li>
        <li className="nav-item">
          <a href="#Videos" className="nav-link">
            Videos
          </a>
        </li>
        <li className="nav-item">
          <a href="#Tutoring" className="nav-link">
            Learn with Abby
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
