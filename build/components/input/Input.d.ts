/// <reference types="react" />
export interface InputProps {
  type?: "number" | "email" | "text";
  label?: string;
  placeholder?: string;
  required?: boolean;
  showInputValueLength?: boolean;
  helpText?: string;
}
export declare const Label: ({
  label,
  required,
  helpText,
}: {
  label?: string | undefined;
  required?: boolean | undefined;
  helpText?: string | undefined;
}) => JSX.Element;
export declare const Input: ({
  type,
  label,
  placeholder,
  required,
  showInputValueLength,
  helpText,
  ...props
}: InputProps) => JSX.Element;
