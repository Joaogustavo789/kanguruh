import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import KanguruhSede from '../../images/Kanguruh-Sede.png';
import GradeFoto from '../../images/grade.png';
import KanguruhMapa from '../../images/mapa-kanguruh.png';

function AboutPage() {
  return (
    <main>
      <Header />
      <p>Quem Somos</p>

      <section>
        <p>A Känguruh</p>
        <div>
          <img src={ KanguruhSede } alt="Foto da sede da Kanguruh" />
          <p>Fundada em 1995, na cidade de João Pessoa/PB, a empresa Känguruh® iniciou sua história como uma pequena serralharia especializada na fabricação de produtos como portões, esquadrias e estruturas metálicas.</p>

          <p>Em 2008, expandiu suas atividades para  o ramo da construção civil, o que gerou a necessidade de mudança para um espaço maior possibilitando a implantação do seu novo parque industrial com área de 10.090m², no município de Bayeux/PB.</p>

          <p>Visando atender às necessidades do mercado por produtos de cercamentos, segregações e porteiras metálicas, em 2020 a Känguruh® aumentou e inovou sua produção, trazendo para o consumidor sistemas diferenciados que afetam diretamente na praticidade do produto no dia-a-dia, na redução de custos, e no aumento da vida útil, mantendo sempre a qualidade que entrega aos seus clientes há 28 anos.</p>
        </div>
      </section>

      <section>
        <p>Nosso compromisso</p>
        <div>
          <p>O conceito de segurança impresso na nossa marca vai muito além dos parâmetros tradicionais. Segurança para a Känguruh® significa proteção e cuidado de dentro para fora, proporcionar produtos que são pensados para trazer praticidade, economia, robustez e a segurança que o cliente precisa.</p>

          <p>Nosso compromisso é com as pessoas, sejam elas colaboradoras internas, parceiras de negócios ou clientes. Temos a consciência de que a Känguruh® existe por elas e para elas, por isso prezamos pelo bem-estar de todas as partes envolvidas, desde o processo de fabricação até a entrega do produto.</p>

          <p>Esses valores somados a qualidade que prezamos e o cuidado que temos com o meio-ambiente em tudo o que fazemos tornam possível um futuro melhor e mais sustentável para todos.</p>
          <img src={ GradeFoto } alt="Foto de uma grade" />
        </div>
      </section>

      <section>
        <p>A Känguruh deixando sua marca pelo Brasil</p>
        <img src={ KanguruhMapa } alt="Foto de um mapa de atuação" />
      </section>
      <Footer />
    </main>
  )
}

export default AboutPage
