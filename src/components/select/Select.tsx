import React, { useEffect, useRef, useState } from "react";
import { MenuItem, MenuItems } from "../dropdown/Dropdown";
import { Label } from "../input/Input";
import { ReactComponent as ChevronDown } from "../../icons/chevron-down.svg";

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
          "bg-lightGray-200 border border-lightGray-300 p-2 rounded-sm cursor-pointer flex justify-between w-48"
        }
        onClick={toggleIsOpen}
      >
        {selection ? (
          selection
        ) : (
          <span className="text-midGray-500">{placeholder}</span>
        )}
        <ChevronDown />
      </div>
      {isOpen && (
        <MenuItems menuItemClick={handleMenuSelect} menuItems={options} />
      )}
    </div>
  );
};
