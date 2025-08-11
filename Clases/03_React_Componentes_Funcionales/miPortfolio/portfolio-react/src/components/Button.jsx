import React from "react";

const Button = ({ children, variant = "primary", onClick, href, target }) => {
  const baseClasses = "button";
  const variantClass = `button--${variant}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`${baseClasses} ${variantClass}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClass}`}>
      {children}
    </button>
  );
};

export default Button;
