import React, { FC } from "react";
import "./AuthButton.css";

/*
    Depending on the prop active, the component will be clickable or not.
*/

interface Props {
  buttonType?: "button" | "submit" | "reset" | undefined;
  buttonText: string;
  active: boolean;
  onButtonClick: any;
}

const AuthButton: FC<Props> = ({
  buttonType,
  buttonText,
  active,
  onButtonClick,
}) => {
  return (
    <button
      disabled={!active}
      type={buttonType}
      className="armada-button"
      onClick={onButtonClick}
    >
      {buttonText}
    </button>
  );
};

export default AuthButton;
