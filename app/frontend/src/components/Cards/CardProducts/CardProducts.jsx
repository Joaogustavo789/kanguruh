import React from 'react';
import { Link } from 'react-router-dom';
import SerralheriaLogo from '../../../images/Serralheria_Industrial.png';
import AgronegocioLogo from '../../../images/Agronegocio.png';
import './CardProducts.css';

function CardProducts() {
  return (
    <main>
      <Link to="/produtos/serralheria-industrial">
        <img src={ SerralheriaLogo } alt="" />
        <p>Serralheria Industrial</p>
      </Link>

      <Link to="/produtos/linha-agro">
        <img src={ AgronegocioLogo } alt="" />
        <p>Agronegócio</p>
      </Link>
    </main>
  )
}

export default CardProducts
