import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';
import './Card.css';

function Card() {
  const history = useHistory();

  const handleSerralheria = () => {
    history.push('/produtos/serralheria-industrial');
  }

  const handleAgronegocio = () => {
    history.push('/produtos/linha-agro');
  }

  return (
    <main>
      <Button
        click={ handleSerralheria }
        children="Serralheria Industrial"
      />
      <Button
        click={ handleAgronegocio }
        children="Agronegócio"
      />
    </main>
  )
}

export default Card
