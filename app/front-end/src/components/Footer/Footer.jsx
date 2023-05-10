import React from 'react';
import MapaLogo from '../../images/mapa.png';
import ContatoLogo from '../../images/contato.png';
import TelefoneTocando from '../../images/telefone-tocando.png';
import CompanhiaLogo from '../../images/companhia.png';
import EmailLogo from '../../images/gmail.png'
import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <section>
        <div>
          <img src={ MapaLogo } alt="Logo de um mapa" className="Mapa-Logo" />
          <p>Localização</p>
        </div>
        <p>Av. Liberdade, 2246</p>
        <p>São Bento - Bayeux/PB</p>
        <p>CEP: 58111-600</p>
      </section>

      <section>
        <div>
          <img src={ ContatoLogo } alt="Logo do Contato" className="Contato-Logo" />
          <p>Contato</p>
        </div>
        <div>
          <img src={ CompanhiaLogo } alt="Logo de uma companhia" className="Companhia-Logo" />
          <p>CNPJ: 00.386.643/0001-15</p>
        </div>
        <div>
          <img src={ TelefoneTocando } alt="Logo de um telefone tocando" className="Telefone-Tocando" />
          <p>(83) 3232-7435</p>
        </div>
        <div>
          <img src={ EmailLogo } alt="Logo de email" className="Email-Logo" />
          <p>contato@kanguruh.ind.br</p>
        </div>
      </section>
      <p>© Känguruh - 2023 - Todos os direitos reservados. Política de Privacidade.</p>
    </footer>
  )
}

export default Footer
