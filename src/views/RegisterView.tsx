import React, { FC, useState } from "react";
import AuthHeading from "../components/AuthHeading/AuthHeading";
import AuthButton from "../components/AuthButton/AuthButton";
import DropdownMenu from "../components/DropdownMenu/DropdownMenu";
import { Genders } from "../components/DropdownMenu/RegisterDropdownItems";

interface Props{
    title: string,
}

const RegisterView: FC<Props> = ({ title }) => {
   

    return (
        <div>
            <AuthHeading title={title}/> 
            <AuthButton buttonText="Register" buttonType="submit" active={true}/>
            <DropdownMenu title="Select your interests" items={Genders} multiSelect={false}/>
        </div>
        
        );
}

export default RegisterView;