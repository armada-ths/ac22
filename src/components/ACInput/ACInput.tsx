import React, { FC } from "react";
import "./ACInput.css";

interface Props {
  type: string;
  placeholder: string;
}

const ACInput: FC<Props> = ({ type, placeholder }) => {
  return (
    <div className="container">
      <input className="ac-input" placeholder={placeholder} type={type} />
    </div>
  );
};

export default ACInput;
