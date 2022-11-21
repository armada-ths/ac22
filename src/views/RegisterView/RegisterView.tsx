import React, { FC, useState } from "react";
import MultiStepForm from "../../components/MultiStepForm/MultiStepForm";
import "./register-view.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, database } from "../../models/Firebase/firebaseConfig";
import { FormData } from "../../components/MultiStepForm/MultiStepForm";
import { redirect } from "react-router-dom";
interface Props {}

async function CreateDoc(user: User, userData: FormData) {
  if (user) {
    const docRef = doc(collection(database, "users"), user.uid);
    try {
      await setDoc(docRef, {
        collectedTickets: {
          nrOfTickets: 0,
          nrOfSuperTickets: 0,
          points: 10, //TODO: Change to 0 on fairday
        },
        starredCompanies: [],
        visitedCompanies: [],
        currentCompany: -1,
        isStudent: true,
        userInfo: {
          email: userData.email,
          studyProgramme: userData.studyProgramme,
          yearOfStudy: userData.yearOfStudy,
          completionYear: userData.completionYear,
          jobInterests: userData.jobInterests.filter(
            (item, index) => userData.jobInterests.indexOf(item) === index
          ),
        },
      });
      return docRef;
    } catch (error) {
      console.error("Error setting document:\n", error);
    }
  }
}

const RegisterView: FC = () => {
  const signUpFunction = async (user: FormData) => {
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      if (auth.currentUser) {
        CreateDoc(auth.currentUser, user);
      }
    } catch (error: any) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        alert(
          "Email is already in use, please provide another valid KTH email"
        );
      } else {
        alert("Something went wrong, please try again");
      }
    }
  };

  return (
    <div className="screen">
      <MultiStepForm registerSubmit={signUpFunction} />
    </div>
  );
};

export default RegisterView;
