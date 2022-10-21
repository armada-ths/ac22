import React, { FC } from "react";
import AuthHeading from "../components/AuthHeading/AuthHeading";
import AuthButton from "../components/AuthButton/AuthButton";

interface Props{
    title: string,
}

const RegisterView: FC<Props> = ({ title }) => {
    return (
        <div>
            <AuthHeading title={title}/> 
            <AuthButton buttonText="Register" buttonType="submit" active={true}/>
        </div>
        
        );
}

export default RegisterView;