import { collection, addDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { database } from "./FirebaseConfig";

export async function addToCompanyDatabase(company: string, ticketType: any) {
	const document = doc(database, "companies", company);

	try {
		const docRef = await setDoc(document, {
			name: company,
			id: company,
			ticketType: ticketType,
		});
	} catch (e) {
		console.error("Error adding document: ", e);
	}
}

export async function addToUserDatabase(user: string, starredCompanies: any, collectedTickets: any) {
	const document = doc(database, "users", user);

	try {
		const docRef = await setDoc(document, {
			name: user,
			id: user,
			starredCompanies: starredCompanies,
			collectedTickets: collectedTickets,
		});
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
