import React from "react";
import chatIcon from "./assets/chat-quote-fill.svg";
import peopleIcon from "./assets/people-fill.svg";
import fileIcon from "./assets/file-richtext.svg";

const Card = ({ icon, price, service, description }) => {
  return (
    <div className="col-sm">
      <div className="card text-center" id="card">
        <div className="card-body">
          <div className="pricing-card icon">
            <img className="card-icon" src={icon} alt={icon} />
          </div>
          <h3 className="card-title">{service}</h3>
          <div className="card-text">
            {description}
            <br />
            <br />
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

//Intended for use with 3 card components
const PricingCards = () => {
  return (
    <div className="container pricing-container" id="Tutoring">
      <div className="row">
        <Card
          icon={fileIcon}
          price="15$/flat-rate"
          service="Worksheet"
          description={
            <ul>
              <li>PDF lesson worksheets</li>
              <li> Dialogue videos</li>
            </ul>
          }
        />
        <Card
          icon={chatIcon}
          price="30$/30 mins"
          service="Conversation Practice"
          description={
            <ul>
              <li>Video-chat session</li>
              <li>Journal review</li>
            </ul>
          }
        />
        <Card
          icon={peopleIcon}
          price="60$/1 hr"
          service="Personal Tutoring"
          description={
            <ul>
              <li>PDF lesson worksheet</li>
              <li>Video-chat session</li>
              <li>Formulated individual lesson</li>
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default PricingCards;
