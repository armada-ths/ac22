import React, { FC } from "react";
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
      <ACInput
        type="password"
        placeholder="Repeat Password"
        value={password}
        onChange={(e) => updateField({ password: e })}
      />
    </div>
  );
};

export default AccountForm;
