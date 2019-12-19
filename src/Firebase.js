import * as firebase from "firebase";
let firebase;
const firebaseConfig = {
  apiKey: "AIzaSyAsHYSB9SB8OnsBr4YD8qiagQsQZsdruMw",
  authDomain: "se-lab-renewal.firebaseapp.com",
  databaseURL: "https://se-lab-renewal.firebaseio.com",
  projectId: "se-lab-renewal",
  storageBucket: "se-lab-renewal.appspot.com",
  messagingSenderId: "757146469571",
  appId: "1:757146469571:web:c84550615780c5209fce76",
  measurementId: "G-7VSNM1VZZ2"
};

export const fire = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  database = firebase.database();
};
