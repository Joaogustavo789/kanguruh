const express = require('express');
const imagesRouter = require('./images.routes');

const router = express.Router();

router.use('/images', imagesRouter);

module.exports = router;
