import React, { FC } from "react";
import { SuccessIcon } from "../../assets/RegisterSuccessIcon/SucccessIcon";
import "./RegisterSuccess.css";

interface Props {
  title: string;
  text: string;
}

const RegisterSuccess: FC<Props> = ({ title, text }) => {
  return (
    <div className="success-container">
      <SuccessIcon />
      <h2 className="success-title">{title}</h2>
      <div className="success-text">
        {text}
      </div>
    </div>
  );
};

export default RegisterSuccess;
