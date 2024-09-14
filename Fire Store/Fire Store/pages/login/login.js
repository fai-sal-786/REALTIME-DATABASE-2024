// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
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
const auth = getAuth();
const db = getFirestore();

const email = document.getElementById("email");
const password = document.getElementById("password");

window.login = () => {
  let obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj);

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(async (res) => {
      let id = res.user.uid;
      const reference = doc(db, "Users", id);

      const user = await getDoc(reference);
      if (user.exists()) {
        console.log(user.data());
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
