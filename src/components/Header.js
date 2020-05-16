import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-4">
            <a href="#About" className="navbar-brand nav-link main">
              Abby P
            </a>
          </div>
          <div className="col-md-8 col-xs-8">
            <nav>
              <ul>
                <li className="nav-item">
                  <a href="#Tutoring" className="nav-link">
                    Learn with Abby
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#Videos" className=" nav-link">
                    Videos
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
