import React, { FC, useState } from "react";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
import AuthButton from "../../components/AuthButton/AuthButton";
import ACInput from "../../components/ACInput/ACInput";
import MultiStepForm from "../../components/MultiStepForm/MultiStepForm";
import "./register-view.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, database } from "../../models/Firebase/firebaseConfig";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import { Genders } from "../../components/DropdownMenu/RegisterDropdownItems";
import { DropdownItem } from "../../components/DropdownMenu/DropdownItem";
import { FormData } from "../../components/MultiStepForm/MultiStepForm";
interface Props {
  title: string;
}

async function CreateDoc(user: User, data: FormData) {
  if (user) {
    const docRef = doc(collection(database, "users"), user.uid);
    try {
      await setDoc(docRef, {
        collectedTickets: {
          nrOfTickets: 0,
          nrOfSuperTickets: 0,
        },
        currentCompany: -1,
        starredCompanies: [],
        userInfo: {
          studyProgramme: data.studyProgramme,
          yearOfStudy: data.yearOfStudy,
          completionYear: data.completionYear,
        },
      });
      return docRef;
    } catch (error) {
      console.error("Error setting document:\n", error);
    }
  }
}

const RegisterView: FC<Props> = ({ title }) => {
  const [error, setError] = useState("");

  // You can use this function to send user registration data to the backend
  async function RegisterUser(user: FormData) {
    await createUserWithEmailAndPassword(auth, user.email, user.password);
    if (auth.currentUser) CreateDoc(auth.currentUser, user);
  }

  return (
    <div>
      <MultiStepForm registerSubmit={RegisterUser} error={error} />
    </div>
  );
};

export default RegisterView;
