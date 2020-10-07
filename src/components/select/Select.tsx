import React, { useEffect, useRef, useState } from "react";
import { MenuItem, MenuItems } from "../dropdown/Dropdown";
import { Label } from "../input/Input";

export interface SelectProps {
  options: MenuItem[];
  label?: string;
  placeholder?: string;
  required?: boolean;
  helpText?: string;
  value?: string;
}

export const Select = ({
  options,
  label,
  placeholder = "Select...",
  required,
  helpText,
  value,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState("");

  const node = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelection(value || "");
  }, [value]);

  const handleMenuSelect = (menuItem: string) => {
    setSelection(menuItem);
    setIsOpen(false);
  };

  const handleClickOutside = (e: any) => {
    if (node?.current?.contains(e?.target)) {
      return;
    }

    setIsOpen(false);
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Label label={label} required={required} helpText={helpText} />
      <div
        ref={node}
        className={
          "bg-gray-200 border border-gray-300 p-2 rounded-md cursor-pointer flex justify-between w-48"
        }
        onClick={toggleIsOpen}
      >
        {selection || placeholder}
        <span className="text-gray-500 flex items-center justify-center">
          <img
            width="16px"
            height="16px"
            src="https://uxwing.com/wp-content/themes/uxwing/download/02-arrow/line-angle-down.png"
            alt="down"
          />
        </span>
      </div>
      {isOpen && (
        <MenuItems menuItemClick={handleMenuSelect} menuItems={options} />
      )}
    </div>
  );
};
