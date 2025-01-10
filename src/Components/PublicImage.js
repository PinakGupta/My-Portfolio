// src/components/PublicImage.js
import React from "react";

const PublicImage = ({ src, alt, ...props }) => {
  const publicSrc = `${process.env.PUBLIC_URL}/${src}`;
  return <img src={publicSrc} alt={alt} {...props} />;
};

export default PublicImage;
