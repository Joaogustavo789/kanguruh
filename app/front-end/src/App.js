import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/quem-somos" component={ AboutPage } />
        <Route exact path="/produtos-kanguruh" component={ ProductsPage } />
        <Route exact path="/contato" component={ ContactPage } />
      </Switch>
    </div>
  );
}

export default App;
