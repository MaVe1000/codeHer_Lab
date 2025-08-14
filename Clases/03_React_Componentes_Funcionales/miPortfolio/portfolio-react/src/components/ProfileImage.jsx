import React from "react";

const ProfileImage = ({ src, alt, size = "large" }) => {
  return (
    <div className={`profile-image profile-image--${size}`}>
      <img src={src} alt={alt} className="profile-image__img" />
    </div>
  );
};

export default ProfileImage;
