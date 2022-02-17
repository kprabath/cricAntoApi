const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");

const storage = new GridFsStorage({
  url: process.env.DB_URL,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, res) => {
    const match = ["image/png", "image/jpeg", "image/gif", "image/jpg"];

    if (match.indexOf(file.mimetype) === -1) {
      const fileName = `${Date.now()}-post-image-${Math.random()}`;
      return fileName;
    }
    return {
      bucketName: "photos_and_media",
      fileName: `${Date.now()}-post-image-${Math.random()}`,
    };
  },
});

module.exports = multer({ storage });
