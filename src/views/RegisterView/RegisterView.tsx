import React, { FC, useState } from "react";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
import AuthButton from "../../components/AuthButton/AuthButton";
import ACInput from "../../components/ACInput/ACInput";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import { Genders } from "../../components/DropdownMenu/RegisterDropdownItems";
import "./register-view.css";
import { DropdownItem } from "../../components/DropdownMenu/DropdownItem";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import auth from "../../components/Firebase/Firebase";

interface Props {
  title: string;
}

const RegisterView: FC<Props> = ({ title }) => {
  const [selectedItem, setSelectedItems] = useState<string>("");

  const handleChange = (selectedOption: DropdownItem) => {
    setSelectedItems(selectedOption.value);
    console.log("handlechange: " + selectedItem);
  };

  // You can use this function to send user registration data to the backend
  function RegisterUser() {
    createUserWithEmailAndPassword(auth, username, password);
  }

  return (
    <div className="wide">
      <div className="Card">
        <AuthHeading title={title} />
        
        <ACInput
          type="email"
          placeholder="Email address"
          value={username}
          onChange={setUsername}
        />
        <ACInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
        <AuthButton
          buttonText="Register"
          buttonType="submit"
          active={true}
          onButtonClick={RegisterUser}
        />
        <DropdownMenu width="100%" title="test" items={Genders} onChange={handleChange} selectedItem={selectedItem}/>
      </div>
    </div>
  );
};

export default RegisterView;
