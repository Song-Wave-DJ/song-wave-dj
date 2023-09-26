import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MyImage = ({ src, height = 80, width = 80, alt = "", styles }) => (
  <>
    <LazyLoadImage
      src={src}
      className={`rounded-full overflow-hidden ${styles}`}
      alt={alt}
      height={height}
      width={width}
    />
  </>
);

export default MyImage;
