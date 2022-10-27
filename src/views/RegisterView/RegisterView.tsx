import React, { FC } from "react";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
import AuthButton from "../../components/AuthButton/AuthButton";
import ACInput from "../../components/ACInput/ACInput";
import "./register-view.css";

interface Props {
  title: string;
}

const RegisterView: FC<Props> = ({ title }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="wide">
      <div className="Card">
        <AuthHeading title={title} />
        <AuthButton buttonText="Register" buttonType="submit" active={true} />
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
    </div>
  );
};

export default RegisterView;
