import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';
import KanguruhLogo from '../../images/kanguruh_logo.png';
import InstagramLogo from '../../images/instagram.png';
import FacebookLogo from '../../images/facebook.png';
import WhatsAppLogo from '../../images/whatsapp.png';
import YouTubeLogo from '../../images/youtube.png';
import './Header.css'

function Header() {
  const history = useHistory();

  const handleHomePage = () => {
    history.push('/')
  }

  const handleAboutPage = () => {
    history.push('/quem-somos')
  }

  const handleProductsPage = () => {
    history.push('/produtos-kanguruh')
  }

  const handleServicesPage = () => {
    history.push('/servicos')
  }

  const handleContactPage = () => {
    history.push('/contato')
  }

  const instagramLogo = <img src={ InstagramLogo } alt="Logo do Instagram" className="Social-Media" />
  const facebookLogo = <img src={ FacebookLogo } alt="Logo do Facebook" className="Social-Media" />
  const whatsappLogo = <img src={ WhatsAppLogo } alt="Logo do WhatsApp" className="Social-Media" />
  const youtubeLogo = <img src={ YouTubeLogo } alt="Logo do YouTube" className="Social-Media" />

  const linkToInstagram = 'https://www.instagram.com/kanguruh.ind.br/';
  const linkToFacebook = 'https://www.facebook.com/kanguruh.ind.br/';
  const linkToWhatsApp = 'https://api.whatsapp.com/send?phone=558332327435&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20consultor.';
  const linkToYouTube = 'https://www.youtube.com/@kanguruh_ind_br';

  return (
    <header className="Header">
      <section className="Box-Image-Text">
        <img src={ KanguruhLogo } alt="Logo da Kanguruh" className="Kanguruh-Logo" />
        <p className="Descrição-Empresa">Indústria metalúrgica de gradis eletrosoldados, telas metálicas, portões, porteiras e outros produtos metálicos</p>
      </section>

      <section className="Buttons-and-Links">
        <Button
          click={ handleHomePage }
          children="Inicio" 
        />
        <Button 
          click={ handleAboutPage }
          children="Quem Somos" 
        />
        <Button 
          click={ handleProductsPage }
          children="Produtos" 
        />
        <Button 
        click={ handleServicesPage }
        children="Serviços" 
        />
        <Button 
        click={ handleContactPage }
        children="Contato" 
        />

        <a className="Links" href={linkToInstagram} target="_blank" rel="noopener noreferrer">{ instagramLogo }</a>
        <a className="Links" href={linkToFacebook} target="_blank" rel="noopener noreferrer">{ facebookLogo }</a>
        <a className="Links" href={linkToWhatsApp} target="_blank" rel="noopener noreferrer">{ whatsappLogo }</a>
        <a className="Links" href={linkToYouTube} target="_blank" rel="noopener noreferrer">{ youtubeLogo }</a>
      </section>
    </header>
  )
}
 
export default Header
