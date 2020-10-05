/// <reference types="react" />
export interface DropdownProps {
    menuItems: {
        label: string;
        value: string;
    }[];
}
export declare const Dropdown: ({ menuItems }: DropdownProps) => JSX.Element;
