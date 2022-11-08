import React, { FC } from "react";
import Select from "react-select";
import { DropdownItem } from "./DropdownItem";
import "./DropdownMenu.css";
interface Props {
  items: any,
  selectedItem: string,
  onChange: (selected: DropdownItem) => (void),
}

const DropdownMenu: FC<Props> = ({
  items,
  onChange,
  selectedItem,
}) => {
  const styling = {
    control: (styles: any) => ({...styles, borderColor: "#2BDBA0", borderRadius: "0.5rem", backgroundColor: "#2BDBA0", color: "white", width: "100%", height: "3rem", fontSize: "1.5rem", fontWeight: "bold", display: "flex", alignItems: ""}),
  }
 
  return (
    <div className="dropdown-container">
        <Select
          options={items}
          onChange={(e) => onChange(e)}  
          value={selectedItem}
          styles={styling}
        />
    </div>
  );
};

export default DropdownMenu;
