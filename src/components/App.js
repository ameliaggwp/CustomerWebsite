import React from "react";
import Header from "./Header";

import { Videos } from "./Videos";
import About from "./About";
import Footer from "./Footer";
import PricingCards from "./PricingCards";
import Inquiries from "./Inquiries";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <div className="videos-pricing-wrapper">
        <Videos />
        <PricingCards />
      </div>
      <Inquiries />
      <Footer />
    </React.Fragment>
  );
};

export default App;
