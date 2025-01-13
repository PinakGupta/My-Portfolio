// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDeUdWNZ8rybon5hEi50X2GdvQ2TIvAs7E",
//   authDomain: "portfolio-c9054.firebaseapp.com",
//   projectId: "portfolio-c9054",
//   storageBucket: "portfolio-c9054.firebasestorage.app",
//   messagingSenderId: "475163623",
//   appId: "1:475163623:web:638dd4659cd958f4bc6b42",
//   measurementId: "G-GYBM3KD5F0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDeUdWNZ8rybon5hEi50X2GdvQ2TIvAs7E",
  authDomain: "portfolio-c9054.firebaseapp.com",
  projectId: "portfolio-c9054",
  storageBucket: "portfolio-c9054.firebasestorage.app",
  messagingSenderId: "475163623",
  appId: "1:475163623:web:638dd4659cd958f4bc6b42",
  measurementId: "G-GYBM3KD5F0"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);