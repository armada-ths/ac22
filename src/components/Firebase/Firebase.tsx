import { getAnalytics } from "firebase/analytics";
import { deleteApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Adeel Credentials
const firebaseConfig = {
  apiKey: "AIzaSyC6CP_AgE7DZ-kda6-SAbKfTa9H_7e-Nmo",
  authDomain: "ac-localdemotest.firebaseapp.com",
  projectId: "ac-localdemotest",
  storageBucket: "ac-localdemotest.appspot.com",
  messagingSenderId: "100951537952",
  appId: "1:100951537952:web:84fc92666abfd91c473f45",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getFirestore(app);
export { auth, database };