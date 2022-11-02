import React, { FC } from "react";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
import AuthButton from "../../components/AuthButton/AuthButton";
import ACInput from "../../components/ACInput/ACInput";
import "./login-view.css";

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
  // function LoginUser(): any {
  //   console.log("hey in here");
  // }

  return (
    <div className="screen">
      <div className="LoginCard">
        <AuthHeading title={title} />
        <ACInput
          type="email"
          placeholder="Email address"
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
          active={true}
          onButtonClick={login}
        />
      </div>
      <div className="RegisterText">
        Don't have an account? <a href="/Register">Register</a>
      </div>
    </div>
  );
};

export default RegisterView;
