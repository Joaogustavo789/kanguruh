import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import KanguruhMapa from '../../images/mapa-kanguruh.png';
import TempoMercado from '../../images/tempo-de-mercado.png';
import './HomePage.css';

function HomePage() {
  return (
    <main>
      <Header />
      <img src={ TempoMercado } alt="Foto do tempo de atuação" className="Tempo-Mercado" />
      <section>
      <p>Conheça nossos segmentos de atuação</p>
        {/* <img src="" alt="" /> */}
      </section>
      <section>
        <p>Alguns de nossos clientes</p>
        {/* <img src="" alt="" /> */}
      </section>
      <section>
        <p>A Känguruh deixando sua marca pelo Brasil</p>
        <img src={ KanguruhMapa } alt="" />
      </section>
      <Footer />
    </main>
  )
}

export default HomePage
