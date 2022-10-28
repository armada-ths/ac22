import { collection, addDoc } from "firebase/firestore";
import { database } from "./FirebaseConfig";

export default async function persistModel() {
	try {
		const docRef = await addDoc(collection(database, "users"), {
			first: "Ada",
			last: "Lovelace",
			born: 1815,
		});
		 console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}
}
