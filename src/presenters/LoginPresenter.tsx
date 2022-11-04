import React, { FC } from "react";
import LoginView from "../views/LoginView/LoginView";

const LoginPresenter: FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // You can use this function to send username and password to the backend
  function LoginUser(): any {
    console.log(username, password);
    console.log("hey in here");
  }
  return (
    <LoginView
      title="Login"
      login={LoginUser}
      username={username}
      password={password}
      usernameOnChange={setUsername}
      passwordOnChange={setPassword}
    />
  );
};

export default LoginPresenter;
