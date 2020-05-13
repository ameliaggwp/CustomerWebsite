import React from "react";
import chatIcon from "./assets/Chat.png";
import tutorIcon from "./assets/Tutoring.png";
import fileIcon from "./assets/Docicon.png";

const Card = ({ icon, price, service, description }) => {
  return (
    <div className="col-sm">
      <div className="card text-center" id="card">
        <div className="card-body">
          <div className="pricing-card icon">
            <img className="card-icon" src={icon} alt={icon} />
          </div>

          <h4 className="card-title">{service}</h4>
          <div className="card-text">
            {description}
            <div className="price">{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

//Intended for use with 3 card components
const PricingCards = () => {
  return (
    <div className="pricing-container" id="Tutoring">
      <div className="row">
        <div className="col">
          <h1 className="pricing">Learn with Abby</h1>
        </div>
      </div>
      <div className="row">
        <Card
          icon={fileIcon}
          price="15$/flat-rate"
          service="Worksheet"
          description={
            <ul>
              <li>PDF lesson worksheets</li>
              <li>Dialogue videos</li>
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
              <li>Dialogue videos</li>
            </ul>
          }
        />
        <Card
          icon={tutorIcon}
          price="60$/1 hr"
          service="Personal Tutoring"
          description={
            <ul>
              <li>Video-chat session</li>
              <li>Formulated individual lessons + worksheets</li>
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default PricingCards;
