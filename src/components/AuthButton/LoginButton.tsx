import React, { FC } from "react";
import "./AuthButton.css";
import ACInput from "../ACInput/ACInput";
import auth from "../Auth/Firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

/*
    Depending on the prop active, the component will be clickable or not.
*/

interface Props {
  buttonType?: "button" | "submit" | "reset" | undefined;
  buttonText: string;
  active: boolean;
  //title: string;
}

const LoginButton: FC<Props> = ({ buttonType, buttonText, active}) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  return (
    <div>
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
    <button disabled={!active} type={buttonType} className="armada-button" onClick={() => signInWithEmailAndPassword(auth, username, password)} >
      {buttonText}
    </button>
    </div>
  );
};

export default LoginButton;
