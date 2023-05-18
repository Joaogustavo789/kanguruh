import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import KanguruhMapa from '../../images/mapa-kanguruh.png';
import TempoMercado from '../../images/tempo-de-mercado.png';
import './HomePage.css';
import CardProducts from '../../components/Cards/CardProducts/CardProducts';
import CardServices from '../../components/Cards/CardServices/CardServices';
import getImages from '../../services/getImages';

function HomePage() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function imagesCompanies() {
      const response = await getImages();
      setCompanies(response.data)
    }

    imagesCompanies();
  }, [])

  console.log(companies);

  return (
    <main>
      <Header />
      <img src={ TempoMercado } alt="Foto do tempo de atuação" className="Tempo-Mercado" />
      <section>
        <p>Conheça nossos segmentos de atuação</p>
        <CardProducts />
        <CardServices />
      </section>

      <section>
        <p>Alguns de nossos clientes</p>
        { companies.map((image) => (
          <img
            key={ image.id } 
            src={ image.urlImageCompanie } 
            alt={ `Logo ${ image.companieName }` } 
          />
        ))}
      </section>

      <section>
        <p>A Känguruh deixando sua marca pelo Brasil</p>
        <img src={ KanguruhMapa } alt="Foto de um mapa de atuação" className="Mapa-Atuação" />
      </section>
      <Footer />
    </main>
  )
}

export default HomePage
