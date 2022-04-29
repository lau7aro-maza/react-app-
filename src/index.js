import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDPPnPj74otnndvRVvUQgXOmPnhRQ3Ixbo",
  authDomain: "my-app-l7.firebaseapp.com",
  projectId: "my-app-l7",
  storageBucket: "my-app-l7.appspot.com",
  messagingSenderId: "96148156504",
  appId: "1:96148156504:web:6fa295a83fef64ddb89a2d"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
