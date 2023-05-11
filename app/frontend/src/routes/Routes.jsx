import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import ServicesPage from '../pages/ServicesPage/ServicesPage';

function Routes() {
  return (
    <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/quem-somos" component={ AboutPage } />
        <Route exact path="/produtos-kanguruh" component={ ProductsPage } />
        <Route exact path="/servicos" component={ ServicesPage } />
        <Route exact path="/contato" component={ ContactPage } />
      </Switch>
  )
}

export default Routes
