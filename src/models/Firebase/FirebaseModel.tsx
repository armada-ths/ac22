import {
  doc,
  getDoc,
  setDoc,
  increment,
  updateDoc,
  deleteField,
  arrayUnion,
} from 'firebase/firestore'
import { database } from './firebaseConfig'
import { getAuth, deleteUser } from "firebase/auth";


export async function addToDB(
  collectionName: string,
  documentID: any,
  data: any,
) {
  const docRef = doc(database, collectionName, documentID)
  if ((await getDoc(docRef)).exists()) {
    switch (collectionName) {
      case 'users':
        //Add to users
        break

      case 'companies':
        addToCompanyDatabase(documentID, data.ticketType, data.ticketNr)
        break
    }
  } else {
    try {
      await setDoc(docRef, {
        TotalTickets: 0,
        SuperTicketsLeft: 0,
      })
    } catch (e) { }
    addToDB(collectionName, documentID, data)
  }
}

export async function addToCompanyDatabase(
  company: string,
  ticketType: string,
  ticketNr: number,
) {
  const docRef = doc(database, 'companies', company)
  const ticket = 'Ticket ' + ticketNr
  if (ticketType === 'superticket') {
    await updateDoc(docRef, {
      SuperTicketsLeft: increment(-1),
      TotalTickets: increment(1),
      [ticket]: {
        ticketType: ticketType,
        available: true,
      },
    })
  } else {
    await updateDoc(docRef, {
      TotalTickets: increment(1),
      [ticket]: {
        ticketType: ticketType,
        available: true,
      },
    })
  }
}

export async function addSurveyToCompanyDatabase(
  user: string,
  company: string,
  ratingExperience: number,
  ratingStall: number,
) {
  const docRef = doc(database, 'companies', company)
  try {
    await updateDoc(
      docRef,
      {
        experieneRating: arrayUnion({
          rating: ratingExperience,
          uid: user,
        }),
        stallRating: arrayUnion({
          rating: ratingStall,
          uid: user,
        }),
      }
    )
  } catch (error) {
    alert(
      'Something went wrong when adding the survey data to company: ' + company,
    )
  }
}

export async function claimTicket(
  currentUserUID: string,
  ticketType: string,
  company: string,
  ticketNr: number,
): Promise<boolean> {
  const ticket = 'Ticket ' + ticketNr
  const docRefCompany = doc(database, 'companies', company)
  const docSnapCompany = await getDoc(docRefCompany)
  const docRefUser = doc(database, 'users', currentUserUID)
  const docSnapUser = await getDoc(docRefUser)
  var ticketGroup
  var points = 0

  if (ticketType === 'standardticket') {
    ticketGroup = 'nrOfTickets'
    points = 3
  } else if (ticketType === 'superticket') {
    ticketGroup = 'nrOfSuperTickets'
    points = 10
  }
  if (docSnapCompany.exists() && docSnapUser.exists()) {
    const data = docSnapCompany.data()
    if (data[ticket].available && ticketGroup != null) {
      //If user created an account before points field was added run this
      if (docSnapUser.data().points == null) {
        await setDoc(
          docRefUser,
          {
            collectedTickets: {
              nrOfTickets: 0,
            },
            points: 10,
          },
          { merge: true },
        )
      }
      await setDoc(
        docRefCompany,
        {
          [ticket]: {
            available: false,
            claimedBy: currentUserUID, // Might want to have the user's name instead of UID
          },
        },
        { merge: true },
      )
      await setDoc(
        docRefUser,
        {
          ['collectedTickets']: {
            [ticketGroup]: increment(1),
          },
          points: increment(points),
          visitedCompanies: arrayUnion(company.replace('@ac22.se', '')),
        },
        { merge: true },
      )
      return true
    } else {
      // Ticket already claimed function (NEEDS IMPLEMENTATION)
      return false
    }
  }
  return false
}

export async function addToUserDatabase(
  user: string,
  starredCompanies: any,
  collectedTickets: any,
) {
  const docRef = doc(database, 'users', user)

  try {
    await setDoc(docRef, {
      starredCompanies: starredCompanies,
      collectedTickets: collectedTickets,
    })
  } catch (e) { }
}

export async function getCompanyData(company: string) {
  const docRef = doc(database, 'companies', company)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
  }
}

export async function getUserData(user: string) {
  const docRefUser = doc(database, 'users', user)
  const docSnapUser = await getDoc(docRefUser)
  if (docSnapUser.exists()) {
    return docSnapUser.data()
  } else {
  }
}

export async function removeFromDB(
  collectionName: string,
  documentID: any,
  data: any,
) {
  const docRef = doc(database, collectionName, documentID)
  try {
    if (collectionName === 'companies' && data.includes('Ticket')) {
      if (data.includes('superticket')) {
        await updateDoc(docRef, {
          [data]: deleteField(),
          TotalTickets: increment(-1),
          SuperTicketsLeft: increment(1),
        })
      } else {
        await updateDoc(docRef, {
          [data]: deleteField(),
          TotalTickets: increment(-1),
        })
      }
    }
  } catch (e) {
    console.error('Error removing document: ', e)
  }
}

export async function deleteAccountFromDB(){
    const auth = getAuth();
		const user = auth.currentUser;
		user? deleteUser(user).then(() => {
			console.log(user, " deleted.");
		}).catch((e) => { console.log(e, " : error in deleting user ", user);
		}): console.log("no user authenticated");
	}

