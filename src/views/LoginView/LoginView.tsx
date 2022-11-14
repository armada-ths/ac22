import React, { FC } from "react";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
import AuthButton from "../../components/AuthButton/AuthButton";
import ACInput from "../../components/ACInput/ACInput";
import "./login-view.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../models/Firebase/firebaseConfig";

interface Props {
  title: string;
  login: any;
  username: string;
  password: string;
  usernameOnChange: any;
  passwordOnChange: any;
}

const RegisterView: FC<Props> = ({
  title,
  login,
  username,
  password,
  usernameOnChange,
  passwordOnChange,
}) => {
  // You can use this function to send username and password to the backend
  function LoginUser(): any {
    signInWithEmailAndPassword(auth, username, password);
  }

  const isValidEmail = (input: any) => {
    if (
      /^\w+([-+.']\w+)*@?(kth\.se)$/.test(input) ||
      /^\w+([-+.']\w+)*@?(ac22\.se)$/.test(input)
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="screen">
      <div className="LoginCard">
        <AuthHeading title={title} />
        <ACInput
          type="email"
          placeholder="Email"
          value={username}
          onChange={usernameOnChange}
        />
        <ACInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordOnChange}
        />
        <AuthButton
          buttonText="Login"
          buttonType="submit"
          active={isValidEmail(username) ? true : false}
          onButtonClick={LoginUser}
        />
      </div>
      <div className="RegisterText">
        Don't have an account? <a href="/Register">Register</a>
      </div>
    </div>
  );
};

export default RegisterView;
