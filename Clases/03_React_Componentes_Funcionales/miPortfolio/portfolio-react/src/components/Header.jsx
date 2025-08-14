import React from "react";

const Header = ({ name, title }) => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__name">{name}</h1>
        <p className="header__title">{title}</p>
      </div>
    </header>
  );
};

export default Header;
