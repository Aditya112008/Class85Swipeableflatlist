import firebase from "firebase";
require("@firebase/firestore");
/*
var firebaseConfig = {
  apiKey: "AIzaSyBJsTqwL8yjTWW8mrCWgrBird7HI944SIw",
  authDomain: "book-santa.firebaseapp.com",
  databaseURL: "https://book-santa.firebaseio.com",
  projectId: "book-santa",
  storageBucket: "book-santa.appspot.com",
  messagingSenderId: "546422247592",
  appId: "1:546422247592:web:a82af183e05f978755f29d",
  measurementId: "G-MLCQNSGDLH"
};
*/
// Initialize Firebase 
var firebaseConfig = {
    apiKey: "AIzaSyDbBF6Y9sxe4MnBRCXrjy_4jvV6L9q7kNk",
    authDomain: "booksanta-4e640.firebaseapp.com",
    projectId: "booksanta-4e640",
    storageBucket: "booksanta-4e640.appspot.com",
    messagingSenderId: "16245890149",
    appId: "1:16245890149:web:6837297c23f32272e1ba8c"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
