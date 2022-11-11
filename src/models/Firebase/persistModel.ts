import { UserModel } from "../UserModel";

import { collection, doc, setDoc, getDoc } from "firebase/firestore"; 
import { auth, database } from "./firebaseConfig";

export async function persistModel(userModel: UserModel) {
    /**Push to db */
    userModel.addObserver(async function() {
        if(auth.currentUser) {
            const docRef = doc(collection(database, "users"), auth.currentUser.uid)
            try {
                await setDoc(docRef, {
                    collectedTickets: userModel.collectedTickets,
                    currentCompany: userModel.currentCompany,
                    starredCompanies: userModel.starredCompanies
                })
                console.log("Current model\n\n", userModel)
            }
            catch(e) {
                console.error("Error setting document:\n", e)
            }
        }
    })

    /**Pull from db */
    if(auth.currentUser) {
        const docRef = doc(collection(database, "users"), auth.currentUser.uid)
        try {
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()) {
                userModel.setCollectedTickets(docSnap.data().collectedTickets)
                userModel.setCurrentCompany(docSnap.data().currentCompany)
                userModel.setStarredCompanies(docSnap.data().starredCompanies)
            }
        }
        catch(e) {
            console.error("Error getting document:\n", e)
        }
    }
}