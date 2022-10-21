import React, { FC, useState } from "react";
import "./ACInput.css";

interface Props {
  type: string;
  placeholder: string;
}

const ACInput: FC<Props> = ({ type, placeholder }) => {
  const [details, setDetails] = useState({
    username: "",
    error: false,
  });

  const handleUsernameChange = (e: any) => {
    console.log("handleUsernameChange()");
    const target = e.target;
    setDetails({
      username: target.value,
      error: target.validationMessage,
    });
  };

  const [validInput, setValidInput] = useState<boolean>(true);

  const emailPattern = "^[A-Za-z0-9._%+-]+@kth.se$";
  const passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$";

  const handleEmailChange = (e: any) => {
    if (e.target.validationMessage) {
      console.log(
        e.target.validationMessage === "Please match the requested format."
      );
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  };

  return (
    <div className={validInput ? "container" : "incorrect-container"}>
      <input
        className="ac-input"
        placeholder={placeholder}
        type={type}
        pattern={type == "email" ? emailPattern : passwordPattern}
        onChange={handleEmailChange}
      />
      <div className="invalid-feedback d-block">{details.error}</div>
    </div>
  );
};

export default ACInput;
