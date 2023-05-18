'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('companies', 
    [
      {
        companie_name: 'Magazine Luiza',
        url_image_companie: 'http://localhost:3001/images/magazine-luiza.png'
      },
      {
        companie_name: 'Netshoes',
        url_image_companie: 'http://localhost:3001/images/netshoes.png'
      },
      {
        companie_name: 'Firestone',
        url_image_companie: 'http://localhost:3001/images/firestone.png'
      },
      {
        companie_name: 'Bridgestone',
        url_image_companie: 'http://localhost:3001/images/bridgestone.png'
      },
      {
        companie_name: 'Pão de Açúcar',
        url_image_companie: 'http://localhost:3001/images/pao-de-acucar.png'
      },
      {
        companie_name: 'Sesc',
        url_image_companie: 'http://localhost:3001/images/sesc.png'
      },
      {
        companie_name: 'M.Dias Branco',
        url_image_companie: 'http://localhost:3001/images/m-dias-branco.png'
      },
      {
        companie_name: 'Unimed',
        url_image_companie: 'http://localhost:3001/images/unimed.png'
      },
      {
        companie_name: 'Queiroz Galvão',
        url_image_companie: 'http://localhost:3001/images/queiroz-galvao.png'
      },
      {
        companie_name: 'Construcap',
        url_image_companie: 'http://localhost:3001/images/construcap.png'
      },
      {
        companie_name: 'Embratel',
        url_image_companie: 'http://localhost:3001/images/embratel.png'
      },
      {
        companie_name: 'Elo',
        url_image_companie: 'http://localhost:3001/images/elo.png'
      },
      {
        companie_name: 'Exército Brasileiro',
        url_image_companie: 'http://localhost:3001/images/exercito-brasileiro.png'
      },
      {
        companie_name: 'Ibama',
        url_image_companie: 'http://localhost:3001/images/ibama.png'
      },
      {
        companie_name: 'Fiat',
        url_image_companie: 'http://localhost:3001/images/fiat.png'
      },
      {
        companie_name: 'Ibis',
        url_image_companie: 'http://localhost:3001/images/ibis.png'
      },
      {
        companie_name: 'Senac',
        url_image_companie: 'http://localhost:3001/images/senac.png'
      },
      {
        companie_name: 'Cimpor',
        url_image_companie: 'http://localhost:3001/images/cimpor.png'
      },
      {
        companie_name: 'Deca',
        url_image_companie: 'http://localhost:3001/images/deca.png'
      },
      {
        companie_name: 'Walbridge',
        url_image_companie: 'http://localhost:3001/images/walbridge.png'
      },
      {
        companie_name: 'Universal',
        url_image_companie: 'http://localhost:3001/images/universal.png'
      },
      {
        companie_name: 'TCE-PB',
        url_image_companie: 'http://localhost:3001/images/tcepb.png'
      },
      {
        companie_name: 'A Igreja de Jesus Cristo dos Santos dos Últimos Dias',
        url_image_companie: 'http://localhost:3001/images/ijcsud.png'
      },
      {
        companie_name: 'Unicred',
        url_image_companie: 'http://localhost:3001/images/unicred.png'
      },
    ], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('companies', null, {});
  }
};
