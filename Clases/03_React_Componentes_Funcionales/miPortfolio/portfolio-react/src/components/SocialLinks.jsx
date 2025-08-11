import React from "react";
import Button from "./Button";

const SocialLinks = ({ links }) => {
  return (
    <div className="social-links">
      {links.map((link, index) => (
        <Button key={index} variant="social" href={link.url} target="_blank">
          <span className="social-links__emoji">{link.emoji}</span>
          <span className="social-links__text">{link.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;
