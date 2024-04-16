import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkQwDivErkxUaeokw1EHXLp0KUwaTxpQ0",
  authDomain: "formauth-firebase.firebaseapp.com",
  projectId: "formauth-firebase",
  storageBucket: "formauth-firebase.appspot.com",
  messagingSenderId: "437045765788",
  appId: "1:437045765788:web:14e598d6f1e0de953e2f59",
  measurementId: "G-1VH2JS8HRY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
