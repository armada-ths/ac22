import React, { FC } from "react";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
import AuthButton from "../../components/AuthButton/AuthButton";
import ACInput from "../../components/ACInput/ACInput";
import "./register-view.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import auth from "../../components/Firebase/Firebase";

interface Props {
  title: string;
}

const RegisterView: FC<Props> = ({ title }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // You can use this function to send user registration data to the backend
  function RegisterUser() {
    createUserWithEmailAndPassword(auth, username, password);
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
