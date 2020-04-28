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
          <h5 className="card-title">
            <div className="pricing-card service-card">{service}</div>
          </h5>
          <div className="card-text">{description}</div>
          <div className="pricing-card price">{price}</div>
        </div>
      </div>
    </div>
  );
};

//Intended for use with 3 card components
const PricingCards = () => {
  return (
    <div className="container">
      <div className="row align-equal row-padding">
        <Card
          icon={fileIcon}
          price="15$/flat-rate"
          service="Worksheet"
          description={
            <div className="description">
              <div className="bullet-item">PDF lesson worksheets</div>
              <div className="bullet-item">Dialogue videos</div>
            </div>
          }
        />
        <Card
          icon={chatIcon}
          price="30$/30 mins"
          service="Conversation Practice"
          description={
            <div className="description">
              <div className="bullet-item">Video-chat session</div>
              <div className="bullet-item">Journal review</div>
            </div>
          }
        />
        <Card
          icon={peopleIcon}
          price="60$/1 hr"
          service="Personal Tutoring"
          description={
            <div className="description">
              <div className="bullet-item">PDF lesson worksheet</div>
              <div className="bullet-item">Video-chat session</div>
              <div className="bullet-item">Formulated individual lesson</div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default PricingCards;
