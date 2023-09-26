import { Image } from "antd";
import React from "react";

const PreviewImage = ({ src }) => {
  return (
    <Image
      preview={false}
      className="rounded-full object-cover"
      width={180}
      height={190}
      src={src}
    />
  );
};

export default PreviewImage;
