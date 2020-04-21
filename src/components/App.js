import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Videos from "./Videos";
import About from "./About";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/videos" exact component={Videos} />
          <Route path="/about" exact component={About} />
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
