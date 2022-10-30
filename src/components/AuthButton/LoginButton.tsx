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
}

const LoginButton: FC<Props> = ({ buttonType, buttonText, active}) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const handleLogin = () => {
    //clearErrors();
    signInWithEmailAndPassword(auth, username, password)
    .catch((err) => {
        switch(err.code) {
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
                setEmailError(err.message);
                break;
            case "auth/wrong-password":
                setPasswordError(err.message);
                break;
        }
    });
  } 
  
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
        
    <button disabled={!active} type={buttonType} className="armada-button" onClick={handleLogin} >
      {buttonText}
    </button>
    
    </div>
  );
};

export default LoginButton;
