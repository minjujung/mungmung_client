import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7BCvhCvBfkP-qOXhwtqKI_ctaGOGgY_E",
  authDomain: "pet-hospital-booking-service.firebaseapp.com",
  projectId: "pet-hospital-booking-service",
  storageBucket: "pet-hospital-booking-service.appspot.com",
  messagingSenderId: "338018173069",
  appId: "1:338018173069:web:4710237788c0736be762c4",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage };
