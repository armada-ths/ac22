import React, { FC } from "react";
import RegisterView from "../views/RegisterView/RegisterView";

const RegisterPresenter: FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return <RegisterView title="Register"
    setUsername={setUsername}
    setPassword={setPassword}
    // username = {username}
    // password = {password}
  />;
};

export default RegisterPresenter;
