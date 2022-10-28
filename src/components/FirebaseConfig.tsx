// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Saba Credentials
// const firebaseConfig = {
//   apiKey: "AIzaSyAGj9wR47WYVq1p6AE3Xtq0e2H-dyKz7hQ",
//   authDomain: "login-ac22.firebaseapp.com",
//   projectId: "login-ac22",
//   storageBucket: "login-ac22.appspot.com",
//   messagingSenderId: "88827171987",
//   appId: "1:88827171987:web:06edfd6bdeebe0c3366966",
//   measurementId: "G-NYRNCD7ZN6"
// };

// Adde Credentials
const firebaseConfig = {
	apiKey: "AIzaSyC6CP_AgE7DZ-kda6-SAbKfTa9H_7e-Nmo",
	authDomain: "ac-localdemotest.firebaseapp.com",
	projectId: "ac-localdemotest",
	storageBucket: "ac-localdemotest.appspot.com",
	messagingSenderId: "100951537952",
	appId: "1:100951537952:web:84fc92666abfd91c473f45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getFirestore(app);
export { auth, database };
