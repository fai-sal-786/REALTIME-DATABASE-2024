// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_oEyTT-VIaanZHrYOwNrI6HmftU_tITA",
    authDomain: "repeatbatch-f0b0f.firebaseapp.com",
    projectId: "repeatbatch-f0b0f",
    storageBucket: "repeatbatch-f0b0f.appspot.com",
    messagingSenderId: "824694453111",
    appId: "1:824694453111:web:7d7d956ff297ed5cb6e772",
    measurementId: "G-MV3PSFNCGQ"};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
