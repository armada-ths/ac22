import React, { FC } from "react";
import Select from "react-select";
import "./DropdownMenu.css";
import { DropdownItem } from "./DropdownItem";

interface Props {
  items: DropdownItem[],
  selectedItem: string,
  onChange: (selected: DropdownItem) => (void),
  title: string
  width: string
}

const DropdownMenu: FC<Props> = ({
  items,
  onChange,
  title,
  width,
  selectedItem
}) => {
  const styling = {
    control: (styles: any) => ({...styles, color: "white", width: {width}, height: "3rem", fontSize: "1rem", display: "flex", textAlign: "left", paddingLeft: "0.8rem"}),
  }
 
  return (
    <div className="dropdown-container">
        <Select
          options={items}
          onChange={(selectedOption: any) => onChange(selectedOption.value)} 
          styles={styling}
          placeholder={title}
          value={selectedItem}
        />
    </div>
  );
};

export default DropdownMenu;
