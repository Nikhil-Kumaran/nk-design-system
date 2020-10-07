/// <reference types="react" />
import { MenuItem } from "../dropdown/Dropdown";
export interface SelectProps {
  options: MenuItem[];
  label?: string;
  placeholder?: string;
  required?: boolean;
  helpText?: string;
  value?: string;
}
export declare const Select: ({
  options,
  label,
  placeholder,
  required,
  helpText,
  value,
}: SelectProps) => JSX.Element;
