// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4tcdtMo0H-y5917PFq15YwBe1YLH1y-U",
    authDomain: "tech-learning-web.firebaseapp.com",
    projectId: "tech-learning-web",
    storageBucket: "tech-learning-web.appspot.com",
    messagingSenderId: "680718754521",
    appId: "1:680718754521:web:7b845722ca8d29a817d4c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;