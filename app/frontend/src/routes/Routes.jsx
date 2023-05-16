import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import ServicesPage from '../pages/ServicesPage/ServicesPage';
import SerralheriaPage from '../pages/SerralheriaPage/SerralheriaPage';
import AgronegocioPage from '../pages/AgronegocioPage/AgronegocioPage';
import ConstrucaoCivilPage from '../pages/ConstrucaoCivilPage/ConstrucaoCivilPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route exact path="/quem-somos" component={ AboutPage } />
      <Route exact path="/produtos" component={ ProductsPage } />
      <Route exact path="/servicos" component={ ServicesPage } />
      <Route exact path="/contato" component={ ContactPage } />
      <Route exact path="/produtos/serralheria-industrial" component={ SerralheriaPage } />
      <Route exact path="/produtos/linha-agro" component={ AgronegocioPage } />
      <Route exact path="/servicos/construcao-civil" component={ ConstrucaoCivilPage } />
    </Switch>
  )
}

export default Routes
