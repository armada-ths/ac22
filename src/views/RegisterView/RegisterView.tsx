import React, { FC } from "react";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
import AuthButton from "../../components/AuthButton/AuthButton";
import ACInput from "../../components/ACInput/ACInput";
import MultiStepForm from "../../components/MultiStepForm/MultiStepForm";
import "./register-view.css";

interface Props {
  title: string;
}

const RegisterView: FC<Props> = ({ title }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // You can use this function to send user registration data to the backend
  function RegisterUser() {
    console.log("hey in here");
  }

  return (
    
  <div>
    {/*<div className="wide">
      <div className="Card">
        <AuthHeading title={title} />
        <AuthButton
          buttonText="Register"
          buttonType="submit"
          active={true}
          onButtonClick={RegisterUser}
        />
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
      </div>
  </div>*/}
    <MultiStepForm />
  </div>
  );
};

export default RegisterView;
