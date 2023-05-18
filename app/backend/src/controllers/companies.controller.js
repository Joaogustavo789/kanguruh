const { companiesService } = require("../services/index");

const getCompaniesController = async (_req, res) => {
  const serviceCompanies = await companiesService.getCompaniesService();
  return res.status(200).json(serviceCompanies);
}

module.exports = {
  getCompaniesController
};
