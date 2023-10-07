// Firebase config file to connect with firebase
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');




const serviceAccount = require('./assignment8-e078a-firebase-adminsdk-ohvbj-30238918ae.json')
// const firebaseConfig = {
//   apiKey: "AIzaSyAPmXP4aC_WmXII_QScMzgkohZtEJB4ymo",
//   authDomain: "nodejs-firebase-30957.firebaseapp.com",
//   projectId: "nodejs-firebase-30957",
//   storageBucket: "nodejs-firebase-30957.appspot.com",
//   messagingSenderId: "1047435442719",
//   appId: "1:1047435442719:web:c192346226e54bb1ea732a",
//   measurementId: "G-79HFCYY8ZK"
// };

initializeApp({
    credential: cert(serviceAccount),
});

const db = getFirestore();

module.exports = db;