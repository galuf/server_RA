const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./storage/fotos");
  },
  filename: function (req, file, cb) {
    let name = `${Date.now()}.jpg`;
    req.name = name;
    cb(null, name);
  },
});

const upload = multer({ storage });

module.exports = upload;
