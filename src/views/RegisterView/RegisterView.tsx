import React, { FC } from "react";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
import AuthButton from "../../components/AuthButton/AuthButton";
import ACInput from "../../components/ACInput/ACInput";
import "./register-view.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore"; 
import { auth, database } from "../../models/Firebase/firebaseConfig";

interface Props {
  title: string;
}

async function CreateDoc(user: User) {
  if(user) {
    const docRef = doc(collection(database, "users"), user.uid)
    try {
      await setDoc(docRef, {
        collectedTickets: {
          nrOfTickets: 0,
          nrOfSuperTickets: 0
        },
        currentCompany: -1,
        starredCompanies: []
      })
    }
    catch(e) {
      console.error("Error setting document:\n", e)
    }
  }
}


const RegisterView: FC<Props> = ({ title }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // You can use this function to send user registration data to the backend
  async function RegisterUser() {
    await createUserWithEmailAndPassword(auth, username, password);
    if(auth.currentUser)
      CreateDoc(auth.currentUser);
  }

  return (
    <div className="wide">
      <div className="Card">
        <AuthHeading title={title} />
        <ACInput
          type="email"
          placeholder="Email address"
          value={username}
          onChange={setUsername}
        />
        <ACInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
        <AuthButton
          buttonText="Register"
          buttonType="submit"
          active={true}
          onButtonClick={RegisterUser}
        />
      </div>
    </div>
  );
};

export default RegisterView;
