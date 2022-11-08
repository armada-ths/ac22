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
  const [selectedItem, setSelectedItems] = useState<string>("");

  const handleChange = (selectedOption: DropdownItem) => {
    setSelectedItems(selectedOption.value);
    console.log("handlechange: " + selectedItem);
  };

  return (
    <div className="wide">
      <div className="Card">
        <AuthHeading title={title} />
        <AuthButton buttonText="Register" buttonType="submit" active={true} />
        <DropdownMenu title={"Gender"} items={Genders} onChange={handleChange} selectedItem={selectedItem}/>
      </div>
    </div>
  );
};

export default RegisterView;
