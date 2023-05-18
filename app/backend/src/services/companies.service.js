const { Companies } = require("../database/models");

const getCompaniesService = async () => {
  const companiesAll = await Companies.findAll();
  return companiesAll;
}

module.exports = {
  getCompaniesService
};
