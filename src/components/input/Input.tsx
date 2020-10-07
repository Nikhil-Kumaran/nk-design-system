import React, { useState } from "react";

export interface InputProps {
  type?: "number" | "email" | "text";
  label?: string;
  placeholder?: string;
  required?: boolean;
  showInputValueLength?: boolean;
  helpText?: string;
}

export const Label = ({
  label,
  required,
  helpText,
}: {
  label?: string;
  required?: boolean;
  helpText?: string;
}) => {
  return (
    <>
      {label && (
        <label className="text-sm text-gray-600 mb-2 block">
          {label} {required && <span className="text-red-600">*</span>}
          {helpText && <span className="ml-2">({helpText})</span>}
        </label>
      )}
    </>
  );
};

export const Input = ({
  type = "text",
  label,
  placeholder,
  required,
  showInputValueLength,
  helpText,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const validateEmail = (text: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(text);
  };
  const validateNumber = (text: string) => {
    const numberPattern = /^\d*$/;
    return numberPattern.test(text);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (type === "email") {
      if (!validateEmail(value)) {
        setError("Enter a valid email");
      } else {
        setError("");
      }
    } else if (type === "number") {
      if (!validateNumber(value)) {
        setError("Enter a valid number");
      } else {
        setError("");
      }
    }
    setInputValue(value);
  };
  return (
    <div>
      <Label label={label} required={required} helpText={helpText} />
      <input
        className="bg-gray-200 border-gray-300 border p-2 rounded-md"
        onChange={handleInputChange}
        value={inputValue}
        placeholder={placeholder}
        {...props}
      />
      {showInputValueLength && inputValue.length ? (
        <span className="ml-2 text-xs">{inputValue.length}</span>
      ) : null}
      {error && <div className="text-sm text-red-600 mt-2">{error}</div>}
    </div>
  );
};
