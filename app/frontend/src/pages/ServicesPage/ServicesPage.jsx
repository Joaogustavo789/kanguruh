import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CardServices from '../../components/Cards/CardServices/CardServices';

function ServicesPage() {
  return (
    <main>
      <Header />
      <p>Serviços</p>
      <CardServices />
      <Footer />
    </main>
  )
}

export default ServicesPage;
