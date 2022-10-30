import React, { FC } from "react";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
import "./register-view.css";
import RegButton from "../../components/AuthButton/RegButton";

interface Props {
  title: string;
}

const RegisterView: FC<Props> = ({ title }) => {
  return (
    <div className="wide">
      <div className="Card">
        <AuthHeading title={title} />
        <RegButton buttonText="Register" buttonType="submit" active={true} />
      </div>
    </div>
  );
};

export default RegisterView;
