import React from 'react';
import './App.scss';


import { AnimatePresence } from "framer-motion"
import NavMenu from './components/NavMenu';
import Main from './components/main/Main';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';
import Page404 from './components/Page404';
import MsgSent from './components/MsgSent';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import StoreProvider from './components/storeContext';

function App() {

  return (
    <Router>
    <div className="App">
      <StoreProvider>
      <NavMenu />
      <AnimatePresence exitBeforeEnter >
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/msgsent" exact component={MsgSent} />
          <Route path="/" component={Page404} />
        </Switch>
      </AnimatePresence>
      </StoreProvider>
      
    </div>
    </Router>
  );
}

export default App;
