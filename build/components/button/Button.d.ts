/// <reference types="react" />
export interface ButtonProps {
    type?: "normal" | "primary" | "subtle" | "warning" | "danger";
    backgroundColor?: string;
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}
export declare const Button: ({ type, backgroundColor, label, disabled, onClick, ...props }: ButtonProps) => JSX.Element;
