import React, { FC, useState } from "react";
import "./ACInput.css";
import { InvalidEmail } from "../../assets/InvalidEmail";

interface Props {
  type: string;
  placeholder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<any>>;
}

const ACInput: FC<Props> = ({ type, placeholder, value, onChange }) => {
  const [validInput, setValidInput] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);
  const [place, setPlace] = useState(placeholder);

  const isValidEmail = (input: any) => {
    if (
      /^\w+([-+.']\w+)*@?(kth\.se)$/.test(input) ||
      /^\w+([-+.']\w+)*@?(ac22\.se)$/.test(input)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isValidPassword = (input: any) => {
    return input.length >= 8;
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
    <div className="input-flex">
      <div
        className={validInput ? "InputHeader" : "InputHeaderWrong"}
        style={{ color: validInput && !active ? "#0F1322" : "" }}
      >
        {active ? placeholder : ""}
        {active && !validInput && type === "email" ? (
          <div className="InvalidEmail">
            <InvalidEmail />
            <span style={{ marginLeft: "4px" }}>Invalid</span>
          </div>
        ) : (
          ""
        )}
        {active && !validInput && type === "password" && (
          <div className="InvalidPassword">
            <InvalidEmail />
            <span style={{ marginLeft: "4px" }}>Min.Length=8</span>
          </div>
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
          onFocus={(e) => {
            e.target.value === "" && setValidInput(false);
            setActive(true);
            setPlace("");
          }}
          onBlur={() => {
            setActive(false);
            setPlace(placeholder);
          }}
          required
        />
      </div>
    </div>
  );
};

export default ACInput;
