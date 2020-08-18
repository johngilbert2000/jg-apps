import React from 'react';
import './App.scss';


import {motion} from "framer-motion"
import NavMenu from './components/NavMenu';
import Main from './components/main/Main';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';
import Page404 from './components/Page404';

import Block from './components/Block';

import about_me from './images/about_me.jpg';
import about_bg from './images/about_bg.jpg';
import building_side from './images/building_side.png';
import code_shot from './images/code_shot.png';
import main_bg from './images/main_bg2.png';
import navbar_drip from './images/navbar_drip.jpeg';
import smoke from './images/smoke.jpeg';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
      <NavMenu />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/" component={Page404} />
      </Switch>

      
    </div>
    </Router>
  );
}

export default App;
