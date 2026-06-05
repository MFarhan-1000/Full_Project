
const cloudinary = require('cloudinary').v2
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret:process.env.API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'User_Posts',
    resource_type: 'auto',
    public_id: (req, file) => Date.now() + "-" ,
  },
});

const upload = multer({storage });
 
module.exports = {cloudinary,upload};
