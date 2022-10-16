import React, { FC } from "react";
import AuthHeading from "../components/AuthHeading/AuthHeading";

interface Props{
    title: string,
}

const RegisterView: FC<Props> = ({ title }) => {
    return <AuthHeading title={title}/>;
}

export default RegisterView;