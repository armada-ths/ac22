import { UserModel } from "../UserModel";

import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { auth, database } from "./firebaseConfig";

export async function persistUser(userModel: UserModel) {
  /**Push to db */
  userModel.addObserver("collectedTickets", async function () {
    if (auth.currentUser) {
      const docRef = doc(collection(database, "users"), auth.currentUser.uid);
      try {
        await setDoc(
          docRef,
          { collectedTickets: userModel.collectedTickets },
          { merge: true }
        );
      } catch (e) {
        console.error("Error setting document (collectedTickets):\n", e);
      }
    }
  });

  userModel.addObserver("starredCompanies", async function () {
    if (auth.currentUser) {
      const docRef = doc(collection(database, "users"), auth.currentUser.uid);
      try {
        await setDoc(
          docRef,
          { starredCompanies: userModel.starredCompanies },
          { merge: true }
        );
      } catch (e) {
        console.error("Error setting document (starredCompanies):\n", e);
      }
    }
  });

  userModel.addObserver("visitedCompanies", async function () {
    if (auth.currentUser) {
      const docRef = doc(collection(database, "users"), auth.currentUser.uid);
      try {
        await setDoc(
          docRef,
          { visitedCompanies: userModel.visitedCompanies },
          { merge: true }
        );
      } catch (e) {
        console.error("Error setting document (visitedCompanies):\n", e);
      }
    }
  });

  userModel.addObserver("currentCompany", async function () {
    if (auth.currentUser) {
      const docRef = doc(collection(database, "users"), auth.currentUser.uid);
      try {
        await setDoc(
          docRef,
          { currentCompany: userModel.currentCompany },
          { merge: true }
        );
      } catch (e) {
        console.error("Error setting document (currentCompany):\n", e);
      }
    }
  });

  userModel.addObserver("userInfo", async function () {
    if (auth.currentUser) {
      const docRef = doc(collection(database, "users"), auth.currentUser.uid);
      try {
        await setDoc(docRef, { userInfo: userModel.userInfo }, { merge: true });
      } catch (e) {
        console.error("Error setting document (userInfo):\n", e);
      }
    }
  });

  /**Pull from db */
  if (auth.currentUser) {
    const docRef = doc(collection(database, "users"), auth.currentUser.uid);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        userModel.setCollectedTickets(docSnap.data().collectedTickets);
        userModel.setStarredCompanies(docSnap.data().starredCompanies);
        userModel.setVisitedCompanies(docSnap.data().visitedCompanies);
        userModel.setUserInfo(docSnap.data().userInfo);
        userModel.setCurrentCompany(docSnap.data().currentCompany);
        console.log(userModel);
      }
    } catch (e) {
      console.error("Error getting document:\n", e);
    }
  }
}
