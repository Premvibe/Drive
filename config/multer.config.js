
const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../drive-7a8c8-firebase-adminsdk-fbsvc-99214a524d.json');

const storage = firebaseStorage({
  credential: firebase.credential.cert(serviceAccount),
  bucketName: 'drive-7a8c8.appspot.com', 
});


const upload = multer({
  storage: storage,
  
     
})

module.exports = upload;