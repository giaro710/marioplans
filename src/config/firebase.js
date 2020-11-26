import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGr68HRWavNDAO4qe7hIjqCs8DrYx07wA",
  authDomain: "marioplans-db108.firebaseapp.com",
  databaseURL: "https://marioplans-db108.firebaseio.com",
  projectId: "marioplans-db108",
  storageBucket: "marioplans-db108.appspot.com",
  messagingSenderId: "1036246675306",
  appId: "1:1036246675306:web:b25af59f6a743f22843f13",
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapShots: true });

export default firebase;
