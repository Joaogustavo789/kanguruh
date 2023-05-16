const express = require('express');
const imagesController = require('../controllers/images.controller');

const imagesRouter = express.Router();

imagesRouter.get('/:imgName', imagesController.controllerGetImages);

module.exports = imagesRouter;
