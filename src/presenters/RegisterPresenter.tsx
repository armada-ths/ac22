import React, { FC } from "react";
import RegisterView from "../views/RegisterView/RegisterView";
import RegisterSuccessView from "../views/RegisterSuccessView/RegisterSuccessView";
interface Props {
  registered: boolean;
}

const RegisterPresenter: FC<Props> = ({ registered }) => {
  return registered ? <RegisterSuccessView /> : <RegisterView />;
};

export default RegisterPresenter;
