import React from "react";
import Header from "./Header";

import { Videos } from "./Videos";
import About from "./About";
import Footer from "./Footer";
import PricingCards from "./PricingCards";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Videos />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default App;
