import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Aboutme from "./components/about/Aboutme";
import Projects from "./components/projects/Projects";
import Experiences from "./components/experiences/Experiences";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./global.scss";

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <Aboutme />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/experiences'>
            <Experiences />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
