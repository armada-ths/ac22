import React, { FC, useState } from "react";
import AuthHeading from "../../components/AuthHeading/AuthHeading";
import AuthButton from "../../components/AuthButton/AuthButton";
import ACInput from "../../components/ACInput/ACInput";
import "./register-view.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import auth from "../../components/Firebase/Firebase";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import { Genders } from "../../components/DropdownMenu/RegisterDropdownItems";
import { DropdownItem } from "../../components/DropdownMenu/DropdownItem";

interface Props {
  title: string;
}

const RegisterView: FC<Props> = ({ title }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<string>("")

  // You can use this function to send user registration data to the backend
  function RegisterUser() {
    createUserWithEmailAndPassword(auth, username, password);
  }

  const handleChange = (selectedOption: DropdownItem) => {
    setSelectedItem(selectedOption.value);
    console.log("handlechange: " + selectedItem);
  };

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

        <DropdownMenu items={Genders} title="Gender..." onChange={handleChange} width="100%" selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default RegisterView;
