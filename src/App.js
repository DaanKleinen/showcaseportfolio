import "./componentStyle/nav.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import MobileNavigation from "./components/MobileNavigation";
import Home from "./vieuws/Home";
import Work from "./vieuws/Work";

function App() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <Router basename="/showcasePortfolio">
      <div className="App">
        {width > 800 ? <Navigation /> : <MobileNavigation />}

        <div id="content">
          <Route path="/" exact render={(name) => <Home />} />
          <Route path="/work" exact render={(name) => <Work />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
