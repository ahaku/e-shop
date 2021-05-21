import React, { FC } from "react";
import "./index.css";
interface IButton {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  additionalClassName?: string;
  disabled?: boolean;
}
const Button: FC<IButton> = ({
  children,
  onClick,
  className = "",
  additionalClassName = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={className || `button ${additionalClassName}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
