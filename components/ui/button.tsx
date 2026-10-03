import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const Button = ({ children, onClick, className = "", type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className}`}
    >
      {children}
    </button>
  );
}

export default Button;