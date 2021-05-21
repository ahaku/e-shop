import React, { FC } from "react";
import "./index.css";
interface IButton {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  additionalClassName?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}
const Button: FC<IButton> = ({
  children,
  onClick = () => {},
  className = "",
  additionalClassName = "",
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      className={className || `button ${additionalClassName}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
