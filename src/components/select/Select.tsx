import React, { useEffect, useRef, useState } from "react";
import { Label } from "../input/Input";
import { ReactComponent as ChevronDown } from "../../icons/chevron-down.svg";
import classNames from "classnames";

export interface SelectProps {
  options: MenuItem[];
  placeholder?: string;
  value?: string;
}

export interface MenuItem {
  label: string;
  value: string;
}

export const MenuItems = ({
  menuItems,
  menuItemClick,
  selection = "",
  activeItemIndex,
  handleOnMouseEnter,
  isOpen,
}: {
  menuItems: MenuItem[];
  menuItemClick?: (item: string) => void;
  selection?: string;
  activeItemIndex?: number;
  handleOnMouseEnter?: (index: number) => void;
  isOpen: boolean;
}) => {
  return (
    <div
      className={classNames({
        "mt-2 shadow-lg w-full rounded-md border border-lightGray-300 absolute bg-white": true,
        hidden: !isOpen,
      })}
      // style={{ display: isOpen ? "block" : "none" }}
      aria-label="Menu items"
    >
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
            role="option"
            aria-selected={selection === value}
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

export const Select = ({
  options,
  placeholder = "Select...",
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
    setInputText("");
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
      <div role="listbox" aria-label="List box">
        <div
          ref={wrapper}
          className={classNames({
            "group border-2 p-2 rounded-sm cursor-pointer flex flex-wrap justify-between relative": true,
            "bg-lightGray-200 border-lightGray-200 hover:bg-lightGray-300 hover:border-lightGray-300": !isInputActive,
            "bg-white border-primary-300": isInputActive,
          })}
          aria-label="Select"
          onClick={toggleIsOpen}
        >
          <div className="flex-grow">
            {!selection && !inputText && (
              <div className="text-midGray-700 absolute translate-y-1/2">
                {placeholder}
              </div>
            )}
            {selection && !inputText && (
              <div
                className="absolute translate-y-1/2 text-darkGray-400"
                aria-label="Selected value"
              >
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
              aria-label="Search"
              ref={input}
              className="focus:outline-none max-w-xxs bg-transparent z-1"
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

        <MenuItems
          isOpen={isOpen}
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
      </div>
    </div>
  );
};
