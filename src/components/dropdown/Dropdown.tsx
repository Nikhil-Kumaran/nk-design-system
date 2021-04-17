import React, { useState } from "react";
import { Button } from "../button/Button";
import classNames from "classnames";

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
  selection = "",
  activeItemIndex,
  handleOnMouseEnter,
}: {
  menuItems: MenuItem[];
  menuItemClick?: (item: string) => void;
  selection?: string;
  activeItemIndex?: number;
  handleOnMouseEnter?: (index: number) => void;
}) => {
  return (
    <div className="mt-2 shadow-lg w-full rounded-md border border-lightGray-300 absolute bg-white">
      {menuItems.length ? (
        menuItems.map(({ label, value }, index) => (
          <div
            className={classNames({
              "py-2 px-4 cursor-pointer": true,
              "bg-darkGray-100 text-white": selection === value,
              "text-darkGray-400": selection !== value,
              "bg-lightGray-200":
                selection !== value && activeItemIndex === index,
            })}
            key={value}
            onClick={menuItemClick?.bind(null, label)}
            onMouseEnter={() => handleOnMouseEnter && handleOnMouseEnter(index)}
          >
            {label}
          </div>
        ))
      ) : (
        <div className="py-2 px-4 cursor-not-allowed text-darkGray-400">
          No options
        </div>
      )}
    </div>
  );
};

export const Dropdown = ({ menuItems, dropdownButtonText }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-36 relative">
      <Button label={dropdownButtonText} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <MenuItems menuItems={menuItems} />}
    </div>
  );
};
