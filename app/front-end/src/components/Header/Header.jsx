import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';
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

  const handleContactPage = () => {
    history.push('/contato')
  }

  return (
    <main>
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
       click={ handleContactPage }
       children="Contato" 
      />
    </main>
  )
}

export default Header
