import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_AC22_FIREBASE_APIKEY,
	authDomain: process.env.REACT_APP_AC22_FIREBASE_AUTHDOMAIN,
	projectId: process.env.REACT_APP_AC22_FIREBASE_PROJECTID,
	storageBucket: process.env.REACT_APP_AC22_FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_AC22_FIREBASE_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_AC22_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

export { auth, database };