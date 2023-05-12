import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

function ServicesPage() {
  const history = useHistory();

  const handleConstrucaoCivil = () => {
    history.push('/servicos/construcao-civil');
  }

  return (
    <main>
      <Header />
      <p>Serviços</p>
      <Button
        click={ handleConstrucaoCivil }
        children="Construção Civil"
      />
      <Footer />
    </main>
  )
}

export default ServicesPage;
