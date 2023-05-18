const express = require('express');
const imagesRouter = require('./images.routes');
const { companiesRouter } = require('./companies.routes');

const router = express.Router();

router.use('/images', imagesRouter);
router.use('/companies', companiesRouter);

module.exports = router;
