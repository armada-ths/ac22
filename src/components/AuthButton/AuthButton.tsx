import React, { FC } from "react";
import "./AuthButton.css";

/*
    Depending on the prop active, the component will be clickable or not.
*/

interface Props {
  buttonType?: "button" | "submit" | "reset" | undefined;
  buttonText: string;
  active: boolean;
}

const AuthButton: FC<Props> = ({ buttonType, buttonText, active}) => {
  return (
    <button disabled={!active} type={buttonType} className="armada-button" onClick={}>
      {buttonText}
    </button>
  );
};

const LoginButton: FC<Props> = ( )

export default AuthButton;
