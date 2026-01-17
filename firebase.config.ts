// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMdGuCSwA7HtuH8BuY3EHmxvXAa1ubOs4",
  authDomain: "yoonyoung-susan.firebaseapp.com",
  projectId: "yoonyoung-susan",
  storageBucket: "yoonyoung-susan.firebasestorage.app",
  messagingSenderId: "171133953380",
  appId: "1:171133953380:web:9efc61c00bf3d96e6fc671",
  measurementId: "G-826HJEFZQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };
