import React, { FC, useState } from "react";
import "./ACInput.css";
import { InvalidEmail } from "../../assets/InvalidEmail";

interface Props {
  type: string;
  placeholder: string;
  // value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const ACInput: FC<Props> = ({ type, placeholder, onChange }) => {
  // const ACInput: FC<Props> = ({ type, placeholder, value, onChange }) => {
  const [validInput, setValidInput] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);
  const [place, setPlace] = useState(placeholder);

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
    <div>
      <div
        className={validInput ? "InputHeader" : "InputHeaderWrong"}
        style={{ color: validInput && !active ? "#0F1322" : "" }}
      >
        {active ? placeholder : ""}
        {active && !validInput && type === "email" ? (
          <div className="InvalidEmail">
            <InvalidEmail />
            <text style={{ marginLeft: "4px" }}>Invalid Email</text>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className={validInput ? "container" : "incorrect-container"}
        style={{ border: validInput && !active ? "1.5px solid #0F1322" : "" }}
      >
        <input
          className="ac-input"
          placeholder={place}
          type={type}
          value={value}
          style={{
            backgroundColor: !validInput && !active ? "#FFE6E6" : "",
          }}
          onChange={(text) => {
            handleChange(text);
            onChange(text.target.value);
          }}
          onFocus={() => {
            setActive(true);
            setPlace("");
          }}
          onBlur={() => {
            setActive(false);
            setPlace(placeholder);
          }}
        />
      </div>
    </div>
  );
};

export default ACInput;
