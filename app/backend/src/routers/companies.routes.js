const express = require('express');
const { companiesController } = require('../controllers/index');

const companiesRouter = express.Router();

companiesRouter.get('/', companiesController.getCompaniesController);

module.exports = {
  companiesRouter
};
