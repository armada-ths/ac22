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
		switch (collectionName) {
			case "users":
				//Add to users
				break;

			case "companies":
				addToCompanyDatabase(documentID, data.ticketType, data.ticketNr);
				break;
		}
	} else {
		try {
			await setDoc(docRef, {
				TotalTickets: 0,
        SuperTicketsLeft: 0,
				// TotalTicketsLeft: 0, //Might not be needed as only SuperTicketsLeft are being shown in main page
			});
		} catch (e) {}
		addToDB(collectionName, documentID, data);
	}
}

export async function addToCompanyDatabase(
	company: string,
	ticketType: string,
	ticketNr: number
) {
	const docRef = doc(database, "companies", company);
	const ticket = "Ticket " + ticketNr;
	// console.log(ticketType);
	if (ticketType === "superticket") {
		await updateDoc(docRef, {
			SuperTicketsLeft: increment(-1),
			TotalTickets: increment(1),
			// TotalTicketsLeft: increment(1), //Might not be needed as only SuperTicketsLeft are being shown in main page
			[ticket]: {
				ticketType: ticketType,
				available: true,
			},
		});
		// console.log("superTicket--");
	} else {
		await updateDoc(docRef, {
			TotalTickets: increment(1),
			// TotalTicketsLeft: increment(1), //Might not be needed as only SuperTicketsLeft are being shown in main page
			[ticket]: {
				ticketType: ticketType,
				available: true,
			},
		});
	}
}

export async function claimTicket(
	currentUserUID: string,
	ticketType: string,
	company: string,
	ticketNr: number
) {
	const ticket = "Ticket " + ticketNr;
	const docRefCompany = doc(database, "companies", company);
	const docSnapCompany = await getDoc(docRefCompany);
	const docRefUser = doc(database, "users", currentUserUID);
	const docSnapUser = await getDoc(docRefUser);
	var ticketGroup;
	var points = 0;

	if (ticketType === "standardticket") {
		ticketGroup = "nrOfTickets";
		points = 3;
	} else if (ticketType === "superticket") {
		ticketGroup = "nrOfSuperTickets";
		points = 10;
	}
	if (docSnapCompany.exists() && docSnapUser.exists()) {
		const data = docSnapCompany.data();
		if (data[ticket].available && ticketGroup != null) {
			await setDoc(
				docRefCompany,
				{
					[ticket]: {
						available: false,
					},
					// TotalTicketsLeft: increment(-1), //Might not be needed as only SuperTicketsLeft are being shown in main page
				},
				{ merge: true }
			);
			await setDoc(
				docRefUser,
				{
					["collectedTickets"]: {
						[ticketGroup]: increment(1),
						points: increment(points),
					},
				},
				{ merge: true }
			);
		} else {
			// Ticket already claimed function (NEEDS IMPLEMENTATION)
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
	} catch (e) {}
}

export async function getCompanyData(company: string) {
	const docRef = doc(database, "companies", company);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		return docSnap.data();
	} else {
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
			if (data.includes("superticket")) {
				await updateDoc(docRef, {
					[data]: deleteField(),
					TotalTickets: increment(-1),
					// TotalTicketsLeft: increment(-1), //Might not be needed as only SuperTicketsLeft are being shown in main page
					SuperTicketsLeft: increment(1),
				});
			} else {
				await updateDoc(docRef, {
					[data]: deleteField(),
					TotalTickets: increment(-1),
					// TotalTicketsLeft: increment(-1), //Might not be needed as only SuperTicketsLeft are being shown in main page
				});
			}
		}
	} catch (e) {
		console.error("Error removing document: ", e);
	}
}
