import React from "react";

const Card = ({ price, service, description }) => {
  return (
    <div className="col-sm">
      <div className="pricing-card price">{price}</div>
      <div className="pricing-card service-card">{service}</div>
      <div className="pricing-card">{description}</div>
    </div>
  );
};
//Intended for use with 3 card components
const PricingCards = () => {
  return (
    <div className="container">
      <div className="row">
        <Card
          price="15$"
          service="Worksheet"
          description=" This is a description"
        />
        <Card
          price="30$"
          service="Conversation Practice"
          description=" This is a description"
        />
        <Card
          price="60$"
          service="Personal Tutoring"
          description=" This is a description"
        />
      </div>
    </div>
  );
};

export default PricingCards;
