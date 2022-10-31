import React, { FC } from "react";
import Select from "react-select";
import { DropdownItem } from "./DropdownItem";
import "./DropdownMenu.css";

interface Props {
    title: string,
    items: DropdownItem[],
    selectedItems: DropdownItem[],
    changeSelectedItems: (selected: DropdownItem[]) => (void),
    multiSelect: boolean
}

const TestDropdownMenu: FC<Props> = ({ title, items, changeSelectedItems, selectedItems, multiSelect }) => {
    // const styling = {
    //   control: (styles: any) => ({...styles, borderColor: "#2BDBA0", borderRadius: "0.5rem", backgroundColor: "#2BDBA0", color: "white", width: "100%", height: "3rem", fontSize: "1.5rem", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center"}),
    // }

    return (
        <div className="dropdown-container">
            <div className="dropdown-title">{title}</div>
            {multiSelect ? (
                <Select
                    options={items}
                    
                    // styles={styling}
                    isMulti
                    value={selectedItems}
                />
            ) : (
                <Select
                    options={items}
                   
                    value={selectedItems}
                />
            )}
        </div>
    );
}

export default TestDropdownMenu;