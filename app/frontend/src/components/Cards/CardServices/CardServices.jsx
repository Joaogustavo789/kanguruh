import React from 'react';
import { Link } from 'react-router-dom';
import ConstrucaoCivilLogo from '../../../images/ConstrucaoCivil.png';

function CardServices() {
  return (
    <main>
      <Link to="/servicos/construcao-civil">
        <img src={ ConstrucaoCivilLogo } alt="" />
        <p>Construção Civil</p>
      </Link>
    </main>
  )
}

export default CardServices;
