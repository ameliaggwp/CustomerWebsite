import React from "react";
import inquiriesPic from "./assets/Crop2.png";

const Inquiries = () => {
  return (
    <div className="row">
      <div className="col-sm">
        <div className="inquiries-info">
          To get started learning with me, or for other business inquiries,
          please send me an email at official.abbypee@gmail.com. Serious
          inquiries only please!
        </div>
      </div>
      <div className="col-sm inquiries-pic">
        <img src={inquiriesPic} />
      </div>
    </div>
  );
};

export default Inquiries;
