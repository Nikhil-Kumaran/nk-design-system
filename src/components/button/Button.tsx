import React from "react";
import classNames from "classnames";

export interface ButtonProps {
  type?: "normal" | "primary" | "subtle" | "warning" | "danger";
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}
export const Button = ({
  type = "normal",
  backgroundColor,
  label,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  const buttonClasses = classNames({
    "px-3 leading-8 rounded transition-all duration-200": true,
    "bg-lightGray-200 hover:bg-lightGray-300": type === "normal" && !disabled,
    "bg-blue-600 hover:bg-blue-500 text-white": type === "primary" && !disabled,
    "bg-transparent hover:bg-lightGray-200": type === "subtle" && !disabled,
    "bg-red-600 hover:bg-red-500 text-white": type === "danger" && !disabled,
    "bg-yellow-600 hover:bg-yellow-500": type === "warning" && !disabled,
    "cursor-not-allowed bg-lightGray-200 text-black text-opacity-50": disabled,
  });

  return (
    <button
      onClick={onClick}
      type="button"
      className={buttonClasses}
      {...props}
    >
      {label}
    </button>
  );
};
