const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: 'dwejynvzz',
api_key: '764732659262936',
api_secret: 'd9ntU4EpcU4vplOYX7VoTGt3Eig'
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'helpYelp',
        allowedFormats: ['jpeg', 'png', 'jpg', 'webp']
    }
});

module.exports = {
    cloudinary,
    storage
}
