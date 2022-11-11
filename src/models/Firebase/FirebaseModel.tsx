import {
	collection,
	doc,
	getDoc,
	getDocs,
	setDoc,
	increment,
	updateDoc,
	deleteField,
} from "firebase/firestore";
import { database } from "./firebaseConfig";

export async function addToDB(
	collectionName: string,
	documentID: any,
	data: any
) {
	const docRef = doc(database, collectionName, documentID);
	if ((await getDoc(docRef)).exists()) {
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
				);
				break;
		}
	} else {
		console.log("No such document! CREATING NEW DOCUMENT");
		try {
			await setDoc(docRef, {
				TotalTickets: 0,
				TotalTicketsLeft: 0,
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
) {
	const docRef = doc(database, "companies", company);
	console.log("Adding to company database");
	const ticket = "Ticket " + ticketNr;
	await updateDoc(docRef, {
		TotalTickets: increment(1),
		TotalTicketsLeft: increment(1),
		[ticket]: {
			ticketType: ticketType,
			available: true,
		},
	});
}

export async function claimTicket(company: string, ticketNr: number) {
	const ticket = "Ticket " + ticketNr;
	const docRef = doc(database, "companies", company);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		const data = docSnap.data();
		if (data[ticket].available) {
			await setDoc(
				docRef,
				{
					[ticket]: {
						available: false,
					},
					TotalTicketsLeft: increment(-1),
				},
				{ merge: true }
			);
			console.log("Ticket claimed!");
		} else {
			console.log("Ticket already claimed");
		}
	}
}

export async function addToUserDatabase(
	user: string,
	starredCompanies: any,
	collectedTickets: any
) {
	const docRef = doc(database, "users", user);

	try {
		await setDoc(docRef, {
			starredCompanies: starredCompanies,
			collectedTickets: collectedTickets,
		});
	} catch (e) {
		console.error("Error adding document: ", e);
	}
}

export async function getCompanyData(company: string) {
	const docRef = doc(database, "companies", company);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		console.log("Document data:", docSnap.data());
		return docSnap.data();
	} else {
		console.log("No such document!");
	}
}

export async function removeFromDB(
	collectionName: string,
	documentID: any,
	data: any
) {
	const docRef = doc(database, collectionName, documentID);
	try {
		if (collectionName === "companies" && data.includes("Ticket")) {
			await updateDoc(docRef, {
				[data]: deleteField(),
				TotalTickets: increment(-1),
				TotalTicketsLeft: increment(-1),
			});
		}
		console.log("Document with data: " + data + "successfully deleted!");
	} catch (e) {
		console.error("Error removing document: ", e);
	}
}

export async function fetchFromDatabase(dbCollection: string) {
	const querySnapshot = await getDocs(collection(database, dbCollection));
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		console.log(doc.id, " => ", doc.data());
	});
}
