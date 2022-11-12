import React, { FC } from "react";
import RegisterSuccess from "../../components/RegisterSuccess/RegisterSuccess";

const RegisterSuccessView: FC = () => {
  return (
    <RegisterSuccess
      title="Registration Successful"
      text="10 points have been added to your account for registering before the fair!" 
    />
  );
};

export default RegisterSuccessView;
