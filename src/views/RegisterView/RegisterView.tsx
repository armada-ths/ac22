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
interface Props {

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
          email: data.email,
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

const RegisterView: FC = () => {
  const [registerError, setRegisterError] = useState("");
  const [successSignup, setSuccessSignup] = useState(false);

  // You can use this function to send user registration data to the backend
  async function RegisterUser(user: FormData) {
    await createUserWithEmailAndPassword(auth, user.email, user.password);
    if (auth.currentUser) CreateDoc(auth.currentUser, user);
  }

  const signUpFunction = async (user: FormData) => {
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      if (auth.currentUser) {
        CreateDoc(auth.currentUser, user);
        setSuccessSignup(true);
      }
    } catch (error) {
      if (error instanceof Error) {
        setRegisterError(error.message);
        console.log(registerError);
        console.log("Mehir");
      }
    }
  };

  return (
    <div>
      <MultiStepForm
        registerSubmit={signUpFunction}
        error={registerError}
      />
    </div>
  );
};

export default RegisterView;
