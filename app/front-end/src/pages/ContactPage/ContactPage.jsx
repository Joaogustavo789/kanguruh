import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

function ContactPage() {
  const submitClient = () => {
    alert('Esse botão ainda não funciona tá.')
  }

  return (
    <main>
      <Header />
      <p>Contato</p>
      <iframe title="Kanguruh location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.033600918604!2d-34.916429725964335!3d-7.122103992881629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace8095f602079%3A0x319068587d88b0b4!2sK%C3%A4nguruh%20-%20Seguran%C3%A7a%20com%20qualidade!5e0!3m2!1spt-BR!2sbr!4v1683721073648!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <form>
        <label htmlFor="fullname">
          <p>Nome Completo:</p>
          <input 
            type="text"
            placeholder="Seu nome completo" 
          />
        </label>
        <label htmlFor="telephone">
          <p>Telefone:</p>
          <input 
            type="tel"
            placeholder="(xx) xxxxx-xxxx"
          />
        </label>
        <label htmlFor="email">
          <p>E-mail:</p>
          <input 
            type="email"
            placeholder="Seu email"
          />
        </label>
        <label htmlFor="products">
          <p>Qual produto você tem interesse:</p>
          <select>
            <option value="">Produto</option>
            <option value="">Produto 2</option>
          </select>
        </label>
        <label htmlFor="textarea">
          <p>Mensagem:</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </label>
        <label htmlFor="contact">
          <p>Por onde gostaria de ser respondido?</p>
          <select>
            <option value="">Telefone 1</option>
            <option value="">Telefone 2</option>
          </select>
        </label>
        <label htmlFor="">
          <Button
            click={ submitClient }
            children="Enviar"
          />
        </label>
      </form>
      <Footer />
    </main>
  )
}

export default ContactPage
