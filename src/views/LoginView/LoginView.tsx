import React, { FC } from "react";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
import AuthButton from "../../components/AuthButton/AuthButton";
import ACInput from "../../components/ACInput/ACInput";
import "./login-view.css";

interface Props {
  title: string;
}

const RegisterView: FC<Props> = ({ title }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // You can use this function to send username and password to the backend
  function LoginUser(): any {
    console.log("hey in here");
  }

  return (
    <div className="screen">
      <div className="LoginCard">
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
          buttonText="Login"
          buttonType="submit"
          active={true}
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
