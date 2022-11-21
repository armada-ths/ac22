import React, { FC } from "react";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
import AuthButton from "../../components/AuthButton/AuthButton";
import ACInput from "../../components/ACInput/ACInput";
import "./login-view.css";
import { signInWithEmailAndPassword } from "firebase/auth";
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
  async function LoginUser() {
    try {
      await signInWithEmailAndPassword(auth, username, password);
    } catch (e: any) {
      if (e.message === "Firebase: Error (auth/user-not-found).") {
        alert("Email is not registered");
      } else if (e.message === "Firebase: Error (auth/wrong-password).") {
        alert("Password is incorrect");
      } else {
        alert("Something went wrong, please try again");
      }
    }
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
      <div className="login-card">
        <AuthHeading title={title} />
        <div className="form-content-login">
          <ACInput
            type="email"
            placeholder="Email"
            value={username}
            onChange={usernameOnChange}
          />
          <span className="wider">
            <form onSubmit={LoginUser}>
              <ACInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={passwordOnChange}
              />
            </form>
          </span>
          <AuthButton
            buttonText="Login"
            buttonType="submit"
            active={
              isValidEmail(username) && password.length >= 8 ? true : false
            }
            onButtonClick={LoginUser}
          />
        </div>
      </div>
      <div className="RegisterText">
        Don't have an account? <a href="/Register">Register</a>
      </div>
    </div>
  );
};

export default RegisterView;
