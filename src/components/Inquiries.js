import React from "react";
import inquiriesPic from "./assets/Crop2.png";

const Inquiries = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm inquiries-info">
          <p className="inquiries-info">
            To get started learning with me, or for other business inquiries,
            please send me an email at{" "}
            <strong>official.abbypee@gmail.com</strong>. Serious inquiries only
            please!
            <br />
            <br />
            Media Kit available on request!
          </p>
        </div>

        <div className="col-sm inquiries-pic">
          <img src={inquiriesPic} />
        </div>
      </div>
    </div>
  );
};

export default Inquiries;
