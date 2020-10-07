/// <reference types="react" />
export interface MenuItem {
  label: string;
  value: string;
}
export interface DropdownProps {
  menuItems: MenuItem[];
  dropdownButtonText: string;
}
export declare const MenuItems: ({
  menuItems,
  menuItemClick,
}: {
  menuItems: MenuItem[];
  menuItemClick?: ((item: string) => void) | undefined;
}) => JSX.Element;
export declare const Dropdown: ({
  menuItems,
  dropdownButtonText,
}: DropdownProps) => JSX.Element;
