import React, { FC, useState } from "react";
import "./ACInput.css";

interface Props {
  type: string;
  placeholder: string;
  value: string;
  onChange: any;
}

const ACInput: FC<Props> = ({ type, placeholder, value, onChange }) => {
  const [validInput, setValidInput] = useState<boolean>(true);

  const isValidEmail = (input: any) => {
    return /^\w+([-+.']\w+)*@?(kth.se)$/.test(input);
  };

  const isValidPassword = (input: any) => {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,64}$/.test(input);
  };

  const handleChange = (e: any) => {
    if (type === "email") {
      if (!isValidEmail(e.target.value)) {
        setValidInput(false);
      } else {
        setValidInput(true);
      }
    } else {
      if (!isValidPassword(e.target.value)) {
        setValidInput(false);
      } else {
        setValidInput(true);
      }
    }
  };

  return (
    <div className={validInput ? "container" : "incorrect-container"}>
      <input
        className="ac-input"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(text) => {
          handleChange(text);
          if (validInput) {
            onChange(text);
          }
        }}
      />
    </div>
  );
};

export default ACInput;
