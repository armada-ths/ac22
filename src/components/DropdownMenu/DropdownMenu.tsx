import React, { FC } from 'react'
import Select from 'react-select'
import { DropdownItem } from './DropdownItem'

interface Props {
    title: string,
    items: DropdownItem[],
    selectedItems?: string[],
    onItemSelect?: any // Check later
    multiSelect: boolean,
}

const DropdownMenu: FC<Props> = ({ title, items, onItemSelect, selectedItems, multiSelect }) => {
  
  const styling = {
    control: (styles: any) => ({...styles, borderColor: "#2BDBA0", borderRadius: "0.5rem", backgroundColor: "#2BDBA0", color: "white", width: "100%", height: "3rem", fontSize: "1.5rem", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center"}),
  }

  return (
    <div>
        <span>{title}</span>
        {
            multiSelect ? (
                <Select
                    options={items}
                    onChange={onItemSelect}
                    value={items.filter(item => selectedItems?.includes(item.value))}
                    isMulti
                    styles={styling}
                    menuIsOpen={true}
                />
            ) : (
                <Select
                    options={items}
                    onChange={onItemSelect}
                    value={items.find(item => item.value === selectedItems?.[0])}
                    styles={styling}
                />
            )
        }
    </div>
  )
}

export default DropdownMenu