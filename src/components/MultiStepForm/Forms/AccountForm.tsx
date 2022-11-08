import React, { FC, useEffect, useState } from "react";
import ACInput from "../../ACInput/ACInput";
import "./Forms.css";

interface AccountData {
  email: string;
  password: string;
}

interface Props extends AccountData {
  updateField: (data: Partial<AccountData>) => void;
}

const AccountForm: FC<Props> = ({ email, password, updateField }) => {
  const [validInput, setValidInput] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [place, setPlace] = useState("Repeat Password");

  useEffect(() => {
    if (repeatPassword === password) {
      console.log("Passwords match");
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  }, [repeatPassword, password]);

  return (
    <div className="form-content">
      <h2>Get Registered</h2>
      <ACInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => updateField({ email: e })}
      />
      <ACInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => updateField({ password: e })}
      />
      <div>
        <div
          className={validInput ? "InputHeader" : "InputHeaderWrong"}
          style={{ color: validInput && !active ? "#0F1322" : "" }}
        >
          {active ? "Repeat password" : ""}
        </div>
        <div
          className={validInput ? "container" : "incorrect-container"}
          style={{ border: validInput && !active ? "1.5px solid #0F1322" : "" }}
        >
          <input
            className="ac-input"
            placeholder={place}
            type="password"
            value={repeatPassword}
            style={{
              backgroundColor: !validInput && !active ? "#FFE6E6" : "",
            }}
            onChange={(e) => setRepeatPassword(e.target.value)}
            onFocus={() => {
              setActive(true);
              setPlace("");
            }}
            onBlur={() => {
              setActive(false);
              setPlace("Repeat Password");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
