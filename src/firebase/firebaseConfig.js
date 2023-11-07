// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDqyrRisqNvBEskX6UDbTn4BLwvSAOyY98",
  authDomain: "unsplash-a01cb.firebaseapp.com",
  projectId: "unsplash-a01cb",
  storageBucket: "unsplash-a01cb.appspot.com",
  messagingSenderId: "462510449448",
  appId: "1:462510449448:web:bbf0505f2a8bf2b203e61d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const singnUpLogin = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error; 
    });
};
