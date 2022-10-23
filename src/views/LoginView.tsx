import React, { FC } from "react";
import AuthHeading from "../components/AuthHeading/AuthHeading";
import AuthButton from "../components/AuthButton/AuthButton";
import ACInput from "../components/ACInput/ACInput";

interface Props {
  title: string;
}

const RegisterView: FC<Props> = ({ title }) => {
  return (
    <div>
      <AuthHeading title={title} />
      <AuthButton buttonText="Register" buttonType="submit" active={true} />
      <ACInput type="email" placeholder="Email address" />
      <ACInput type="password" placeholder="Password" />
    </div>
  );
};

export default RegisterView;
