import React, { FC } from "react";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
import "./login-view.css";
import LoginButton from "../../components/AuthButton/LoginButton";

interface Props {
  title: string;
}

const RegisterView: FC<Props> = ({ title }) => {
  return (
    <div className="screen">
      <div className="LoginCard">
        <AuthHeading title={title} />
        <LoginButton buttonText="Login" buttonType="submit" active={true} />
      </div>
      <div className="RegisterText">
        Don't have an account? <a href="/Register">Register</a>
      </div>
    </div>
  );
};

export default RegisterView;
