import { collection, addDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { database } from "./FirebaseConfig";

export async function addToDatabase(qrCode: any) {
	try {
		const docRef = await addDoc(collection(database, "users"), {
			User: "John" + "Doe",
			QRCode: qrCode,
		});
		console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}
}

export async function fetchFromDatabase(dbCollection: string) {
	const querySnapshot = await getDocs(collection(database, dbCollection));
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		console.log(doc.id, " => ", doc.data());
	});
}
