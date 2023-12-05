import * as firebase from "firebase";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDCbSLqeYcpLbelOPrJVxmPQvAPnKUWy14",
//   authDomain: "ecommerce-bdf98.firebaseapp.com",
//   projectId: "ecommerce-bdf98",
//   storageBucket: "ecommerce-bdf98.appspot.com",
//   messagingSenderId: "171919899530",
//   appId: "1:171919899530:web:ae4b7b58f17b7398e26673",
//   measurementId: "G-4PV55SEFZ8"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAPO6bUxTtMdxjJ-EpXVl4Ls7UEPmP5Muk",
  authDomain: "web2023audio.firebaseapp.com",
  databaseURL: "https://web2023audio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "web2023audio",
  storageBucket: "web2023audio.appspot.com",
  messagingSenderId: "243524202116",
  appId: "1:243524202116:web:ad1f6e980baa56c3db1cd1",
  measurementId: "G-TY1T09SQL5"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
