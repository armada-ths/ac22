import React, { FC, useState } from "react";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
import AuthButton from "../../components/AuthButton/AuthButton";
import ACInput from "../../components/ACInput/ACInput";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import { Genders } from "../../components/DropdownMenu/RegisterDropdownItems";
import "./register-view.css";
import { DropdownItem } from "../../components/DropdownMenu/DropdownItem";

interface Props {
  title: string;
}

const RegisterView: FC<Props> = ({ title }) => {
  const [selectedItems, setSelectedItems] = useState<DropdownItem[] | DropdownItem>([]);

  const handleChange = (selectedOption: DropdownItem[] | DropdownItem) => {
    setSelectedItems(selectedOption);
    console.log("handlechange: " + selectedItems);
  };

  return (
    <div className="wide">
      <div className="Card">
        <AuthHeading title={title} />
        <AuthButton buttonText="Register" buttonType="submit" active={true} />
        <DropdownMenu title={"Gender"} items={Genders} multiSelect={true} onChange={handleChange} selectedItems={selectedItems}/>
      </div>
    </div>
  );
};

export default RegisterView;
