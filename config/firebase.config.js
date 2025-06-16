const Firebase = require('firebase-admin');

const serviceAccount = require('../drive-7a8c8-firebase-adminsdk-fbsvc-99214a524d.json');

const firebase = Firebase.initializeApp({
  credential: Firebase.credential.cert(serviceAccount),
  storageBucket: 'drive-7a8c8.appspot.com',
})

module.exports = Firebase;