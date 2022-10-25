import React, { FC } from "react";
import AuthHeading from "../components/AuthHeading/AuthHeading";
import AuthButton from "../components/AuthButton/AuthButton";
import ACInput from "../components/ACInput/ACInput";

interface Props {
  title: string;
}

const RegisterView: FC<Props> = ({ title }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div>
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
  );
};

export default RegisterView;
