import { collection, addDoc } from "firebase/firestore";
import { database } from "./FirebaseConfig";

export default async function persistModel(qrCode: any) {
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
