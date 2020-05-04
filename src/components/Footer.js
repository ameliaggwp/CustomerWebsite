import React from "react";
import Twitter from "./assets/Twitter_Logo_WhiteOnImage.svg";
import Facebook from "./assets/f_logo_RGB-White_144.png";
import Instagram from "./assets/glyph-logo_May2016.png";
import Twitch from "./assets/TwitchGlitchWhite.svg";
import Youtube from "./assets/yt_icon_mono_dark.png";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="social-follow">
          <a href="https://twitter.com/abbyjpee">
            <img className="social-icon" src={Twitter} alt="twitter" />
          </a>
          <a href="https://www.facebook.com/abbypeeofficial">
            <img className="social-icon" src={Facebook} alt="facebook" />
          </a>
          <a href="https://www.twitch.tv/abbyp">
            <img className="social-icon" src={Twitch} alt="twitch" />
          </a>
          <a href="https://www.youtube.com/channel/UCHEEOe5SnxYau9puXKtqx5Q">
            <img className="social-icon" src={Youtube} alt="youtube" />
          </a>
          <a href="https://www.instagram.com/abbyjpee/">
            <img
              className="social-icon"
              id="invert"
              src={Instagram}
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
