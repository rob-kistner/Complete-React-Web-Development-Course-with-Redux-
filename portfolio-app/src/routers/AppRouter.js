import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import PortfolioItem from '../pages/PortfolioItem'
import Contact from '../pages/Contact'
import Error404 from '../pages/Error404'

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} />
        <Route path="/portfolio" component={Portfolio} exact />
        <Route path="/portfolio/:id" component={PortfolioItem} />
        <Route path="/contact" component={Contact} />
        <Route component={Error404} />
      </Switch>
    </div>
  </BrowserRouter>
);


export default AppRouter;

