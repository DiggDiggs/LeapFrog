// firebase-config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2iEdwEc2BGFFgmYxSqFAJYKXIEhiA4R4",
    authDomain: "leapfrog-7af0f.firebaseapp.com",
    projectId: "leapfrog-7af0f",
    storageBucket: "leapfrog-7af0f.appspot.com",
    messagingSenderId: "723527974399",
    appId: "1:723527974399:web:66b41d1cdf07653cacbbca",
    measurementId: "G-LMLBZ1G23G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
