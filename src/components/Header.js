import React from "react";

const Header = () => {
  return (
    <div className="container">
      <ul className="nav justify-content-center">
        <li className="nav-item nav-home">
          <a className="nav-link">Abby P</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Videos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
