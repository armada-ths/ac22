import React, { FC } from "react";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
import AuthButton from "../../components/AuthButton/AuthButton";
import ACInput from "../../components/ACInput/ACInput";
import "./register-view.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import auth from "../../components/Firebase/Firebase";
import { isPropertySignature } from "typescript";

interface Props {
  title: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void; 
  // username:(username:string ) 
  // password:(password:string )
}

const RegisterView: FC<Props> = (props, {title}) => {

  return (
    <div className="wide">
      <div className="Card">
        <AuthHeading title={title} />
        <ACInput
          type="email"
          placeholder="Email address"
          // value={}
          onChange={(e) => {props.setUsername()}}
        />
  
        <ACInput
          type="password"
          placeholder="Password"
          // value={password}
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
