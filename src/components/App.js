import React from "react";
import Header from "./Header";

import { Videos } from "./Videos";
import About from "./About";
import Footer from "./Footer";
import PricingCards from "./PricingCards";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <About />
        <Videos />
        <PricingCards />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
