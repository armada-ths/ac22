import {
	collection,
	doc,
	getDoc,
	getDocs,
	setDoc,
	increment,
	updateDoc,
	arrayUnion,
	query,
	where,
} from "firebase/firestore";
import { database } from "./FirebaseConfig";

export async function addToDB(
	collectionName: string,
	documentID: any,
	data: any
) {
	const document = doc(database, collectionName, documentID);
	if ((await getDoc(document)).exists()) {
		console.log("Document already found!");
		switch (collectionName) {
			case "users":
				//Add to users
				break;

			case "companies":
				addToCompanyDatabase(
					documentID,
					data.ticketType,
					data.ticketNr,
					data.ticketPoints
				);
				break;
		}
	} else {
		console.log("No such document! CREATING NEW DOCUMENT");
		try {
			await setDoc(document, {
				TotalTickets: 0,
			});
		} catch (e) {
			console.error("Error adding document: ", e);
		}
		addToDB(collectionName, documentID, data);
	}
}

export async function addToCompanyDatabase(
	company: string,
	ticketType: string,
	ticketNr: number,
	ticketPoints: number
) {
	const document = doc(database, "companies", company);
	console.log("Adding to company database");
	const ticket = "Ticket " + ticketNr;
	await updateDoc(document, {
		TotalTickets: increment(1),
		[ticket]:{
			points: ticketPoints,
			ticketType: ticketType,
			available: true
		}
	});
}

export async function claimTicket(
	company: string,
	ticketType: string,
	ticketPoints: string,
	ticketNr: number
) {
	const ticket = "Ticket " + ticketNr;
	const document = doc(database, "companies", company);
	console.log("editing ticket: " + company + " " + ticketType + " " + ticket);
	await updateDoc(document, {
		[ticket]:{ //Perhaps find better way to only change available instead of rewriting the whole object
			points: ticketPoints,
			ticketType: ticketType,
			available: false
		}
	});
	console.log("Ticket claimed!");
}

export async function addToUserDatabase(
	user: string,
	starredCompanies: any,
	collectedTickets: any
) {
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
