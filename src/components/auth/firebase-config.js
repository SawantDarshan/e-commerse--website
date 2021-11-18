import { initializeApp } from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCLr9QJOaz-kLcPI9DHxOrMeaAi9cMDI3A",
    authDomain: "ecommerce-netlify.firebaseapp.com",
    projectId: "ecommerce-netlify",
    storageBucket: "ecommerce-netlify.appspot.com",
    messagingSenderId: "25200332683",
    appId: "1:25200332683:web:e299efca1c839840c4298e",
    measurementId: "G-R7HN85GHS5"
  };

  const app = initializeApp(firebaseConfig)

  export const auth = firebase.auth(app)