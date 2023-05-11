import React from 'react';
import MapaLogo from '../../images/mapa.png';
import ContatoLogo from '../../images/contato.png';
import TelefoneTocando from '../../images/telefone-tocando.png';
import CompanhiaLogo from '../../images/companhia.png';
import EmailLogo from '../../images/gmail.png';
import KanguruhLogoRed from '../../images/kanguruh_logo.png';
import EstradaLogo from '../../images/estrada.png';
import CidadeLogo from '../../images/cidade.png';
import CEPLogo from '../../images/caixa-de-correio.png';

import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <section className="Copyright">
        <img className="Kanguruh-Logo-Red" src={ KanguruhLogoRed } alt="" />
        <p>© Känguruh - 2023 - Todos os direitos reservados. Política de Privacidade.</p>
      </section>

      <section className="Section-Contact">
        <div className="Atendente">
          <img src={ ContatoLogo } alt="Logo do Contato" className="Contato-Logo" />
          <p>Contato</p>
        </div>
        <div className="Contato">
          <img src={ CompanhiaLogo } alt="Logo de uma companhia" className="Companhia-Logo" />
          <p>CNPJ: 00.386.643/0001-15</p>
        </div>
        <div className="Contato">
          <img src={ TelefoneTocando } alt="Logo de um telefone tocando" className="Telefone-Tocando" />
          <p>(83) 3232-7435</p>
        </div>
        <div className="Contato">
          <img src={ EmailLogo } alt="Logo de email" className="Email-Logo" />
          <p>contato@kanguruh.ind.br</p>
        </div>
      </section>

      <section className="Section-Location">
        <div className="Localização">
          <img src={ MapaLogo } alt="Logo de um mapa" className="Mapa-Logo" />
          <p>Localização</p>
        </div>
        <div className="Address">
          <img src={ EstradaLogo } alt="Logo de uma estrada" className="Estrada-Logo" />
          <p>Av. Liberdade, 2246</p>
        </div>
        <div className="Address">
          <img src={ CidadeLogo } alt="Logo de uma cidade" className="Cidade-Logo" />
          <p>São Bento - Bayeux/PB</p>
        </div>
        <div className="Address">
          <img src={ CEPLogo } alt="Logo de uma caixa de correio" className="CEP-Logo" />
          <p>CEP: 58111-600</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
