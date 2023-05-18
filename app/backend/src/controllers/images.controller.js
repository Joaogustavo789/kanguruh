const path = require('path');

const controllerGetImages = (req, res, next) => {
  const { imgName } = req.params;

  const options = {
    root: path.join(__dirname, '../images')
  }

  const fileName = imgName;

  res.sendFile(fileName, options, (err) => {
    if (err) {
      next(err);
    } else {
      console.log('Send:', fileName);
      next();
    }
  });
};

module.exports = {
  controllerGetImages
};
