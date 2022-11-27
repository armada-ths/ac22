import React, { FC } from "react";
import { CompanyUserModel } from "../models/companyUserModel";
import CompanyStatView from "../views/CompanyStatView/CompanyStatView";


interface props {
    user: CompanyUserModel;
}


const CompanyStatPresenter: FC<props> = ({user}) => {
    const [company, setCompany] = React.useState(user.email as string); 
    
    function sanitize(string: string) {
		return (
			string.charAt(0).toUpperCase() +
			string.substring(0, string.indexOf("@")).slice(1)
		);
	}
    return (
        <CompanyStatView 
        company = {sanitize(company)}
        />
    );
  };

export default CompanyStatPresenter;