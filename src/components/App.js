import React from "react";
import Header from "./Header";
import Classes from "./Classes";
import { Videos } from "./Videos";
import About from "./About";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Videos />
      <Classes />
      <Footer />
    </div>
  );
};

export default App;
