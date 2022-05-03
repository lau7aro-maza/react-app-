import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDPPnPj74otnndvRVvUQgXOmPnhRQ3Ixbo",
  authDomain: "my-app-l7.firebaseapp.com",
  projectId: "my-app-l7",
  storageBucket: "my-app-l7.appspot.com",
  messagingSenderId: "96148156504",
  appId: "1:96148156504:web:6fa295a83fef64ddb89a2d"
};

initializeApp(firebaseConfig);
export const db = getFirestore();