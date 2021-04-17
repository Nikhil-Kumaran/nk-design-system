import React, { useEffect, useRef, useState } from "react";
import { MenuItem, MenuItems } from "../dropdown/Dropdown";
import { Label } from "../input/Input";
import { ReactComponent as ChevronDown } from "../../icons/chevron-down.svg";
import classNames from "classnames";

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
  const [inputText, setInputText] = useState("");
  const [selection, setSelection] = useState("");
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const wrapper = useRef<HTMLDivElement | null>(null);
  const input = useRef<HTMLInputElement | null>(null);
  const hiddenDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelection(value || "");
  }, [value]);

  useEffect(() => {
    if (!isOpen) {
      setInputText("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (selection && inputText) {
      setIsOpen(true);
    }
  }, [selection, inputText]);

  const handleMenuSelect = (menuItem: string) => {
    setSelection(menuItem);
    setIsOpen(false);
    input.current?.focus();
  };

  const handleClickOutside = (e: any) => {
    if (wrapper?.current?.contains(e?.target)) {
      return;
    }

    setIsOpen(false);
  };

  const toggleIsOpen = () => {
    input.current?.focus();
    setIsOpen(!isOpen);
  };

  const handleOnMouseEnter = (index: number) => {
    setActiveItemIndex(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) {
      if (event.key === "Backspace") {
        setIsOpen(true);
      }
      return;
    }
    console.log(event.key);
    const _options = options.filter((option) =>
      option.label.toLowerCase().includes(inputText.toLowerCase())
    );
    if (event.key === "ArrowUp") {
      if (activeItemIndex === 0) {
        return;
      }
      setActiveItemIndex(activeItemIndex - 1);
    } else if (event.key === "ArrowDown") {
      if (activeItemIndex === _options.length - 1) {
        return;
      }
      setActiveItemIndex(activeItemIndex + 1);
    } else if (event.key === "Enter") {
      setSelection(_options[activeItemIndex].label);
      setIsOpen(false);
      setInputText("");
    } else if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const isInputActive = document.activeElement === input.current;

  return (
    <div className="w-64 relative">
      <Label label={label} required={required} helpText={helpText} />
      <div
        ref={wrapper}
        className={classNames({
          "group border-2 p-2 rounded-sm cursor-pointer flex flex-wrap justify-between relative": true,
          "bg-lightGray-200 border-lightGray-200 hover:bg-lightGray-300 hover:border-lightGray-300": !isInputActive,
          "bg-white border-primary-300": isInputActive,
        })}
        onClick={toggleIsOpen}
      >
        <div className="flex-grow">
          {!selection && !inputText && (
            <div className="text-midGray-500 absolute translate-y-1/2">
              {placeholder}
            </div>
          )}
          {selection && !inputText && (
            <div className="absolute translate-y-1/2 text-darkGray-400">
              {selection}
            </div>
          )}
          <div
            className="absolute h-0 invisible overflow-scroll whitespace-pre"
            ref={hiddenDiv}
          >
            {inputText}
          </div>
          <input
            type="text"
            ref={input}
            className={classNames({
              "focus:outline-none max-w-xxs": true,
              "bg-white": isInputActive,
              "bg-lightGray-200 group-hover:bg-lightGray-300": !isInputActive,
            })}
            style={{
              width: `${hiddenDiv.current?.offsetWidth || 2}px`,
            }}
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
        </div>

        <ChevronDown />
      </div>
      {isOpen && (
        <MenuItems
          selection={
            options.find((option) => option.label === selection)?.value
          }
          menuItemClick={handleMenuSelect}
          menuItems={options.filter((option) =>
            option.label.toLowerCase().includes(inputText.toLowerCase())
          )}
          activeItemIndex={activeItemIndex}
          handleOnMouseEnter={handleOnMouseEnter}
        />
      )}
    </div>
  );
};
