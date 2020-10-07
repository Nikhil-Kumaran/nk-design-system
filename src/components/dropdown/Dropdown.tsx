import React, { useState } from "react";
import { Button } from "../button/Button";

export interface MenuItem {
  label: string;
  value: string;
}

export interface DropdownProps {
  menuItems: MenuItem[];
  dropdownButtonText: string;
}

export const MenuItems = ({
  menuItems,
  menuItemClick,
}: {
  menuItems: MenuItem[];
  menuItemClick?: (item: string) => void;
}) => {
  return (
    <div className="mt-2 shadow-lg w-48 rounded-md border border-gray-300">
      {menuItems.map(({ label, value }) => (
        <div
          className="p-2 m-2 rounded-md hover:bg-gray-200 cursor-pointer"
          key={value}
          onClick={menuItemClick?.bind(this, label)}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export const Dropdown = ({ menuItems, dropdownButtonText }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button label={dropdownButtonText} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <MenuItems menuItems={menuItems} />}
    </div>
  );
};
