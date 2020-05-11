import React from "react";
import inquiriesPic from "./assets/Crop2.png";

const Inquiries = () => {
  return (
    <div className="row">
      <div className="col-sm inquiries-info">
        This is where we'll put the email info/ info about serious inquiries
        only
      </div>
      <div className="col-sm inquiries-pic">
        <img src={inquiriesPic} />
      </div>
    </div>
  );
};

export default Inquiries;
