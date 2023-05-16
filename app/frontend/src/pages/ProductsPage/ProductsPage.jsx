import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardProducts from '../../components/Cards/CardProducts/CardProducts'

function ProductsPage() {
  return (
    <main>
      <Header />
      <p>Áreas de atuação</p>
      <CardProducts />
      <Footer />
    </main>
  )
}

export default ProductsPage
