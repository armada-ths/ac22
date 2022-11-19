import React, { FC } from "react";
import RegisterSuccess from "../../components/RegisterSuccess/RegisterSuccess";

const RegisterSuccessView: FC = () => {
  return (
    <div className="screen">
      <RegisterSuccess
        title="Registration Successful"
        text="10 points have been added to your account for registering before the fair! Your account will be activated during the Fair-days!"
      />
    </div>
  );
};

export default RegisterSuccessView;
