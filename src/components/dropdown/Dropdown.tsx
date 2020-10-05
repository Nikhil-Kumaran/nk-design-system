import React, { useState } from "react";
import { Button } from "../button/Button";

export interface DropdownProps {
  menuItems: { label: string; value: string }[];
}
export const Dropdown = ({ menuItems }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button label="Dropdown" onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="mt-2 shadow-lg w-48 rounded-md border border-gray-300">
          {menuItems.map(({ label, value }) => (
            <div
              className="p-2 m-2 rounded-md hover:bg-gray-200 cursor-pointer"
              key={value}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
