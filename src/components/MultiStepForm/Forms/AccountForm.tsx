import React, { FC, useEffect, useState } from "react";
import ACInput from "../../ACInput/ACInput";
import "./Forms.css";

interface AccountData {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

interface Props extends AccountData {
  updateField: (data: Partial<AccountData>) => void;
  emailExists?: boolean;
}

const AccountForm: FC<Props> = ({
  email,
  password,
  updateField,
  emailExists,
  repeatPassword,
}) => {
  const [validInput, setValidInput] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);
  const [place, setPlace] = useState("Repeat Password");

  useEffect(() => {
    if (repeatPassword === password) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  }, [repeatPassword]);

  return (
    <div className="form-content">
      <h2>Get Registered</h2>
      {emailExists && (
        <div style={{ color: "red", marginTop: "-6px" }}>
          Account with this email already exists
        </div>
      )}
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
      <div className="input-flex-account">
        <div
          className={validInput ? "InputHeader1" : "InputHeaderWrong1"}
          style={{ color: validInput && !active ? "#0F1322" : "" }}
        >
          {active ? "Retype password" : ""}
        </div>
        <div
          className={validInput ? "container1" : "incorrect-container1"}
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
            onChange={(e) => {
              updateField({ repeatPassword: e.target.value });
            }}
            onFocus={() => {
              setActive(true);
              setPlace("");
            }}
            onBlur={() => {
              setActive(false);
              setPlace("Repeat Password");
            }}
            required
          />
        </div>
      </div>

    </div>
  );
};

export default AccountForm;
