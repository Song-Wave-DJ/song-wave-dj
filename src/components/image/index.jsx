/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyImage = ({ src, height = 80, width = 80, alt = "", styles }) => (
  <LazyLoadImage
    src={src}
    className={`rounded-full overflow-hidden ${styles}`}
    alt={alt}
    height={height}
    width={width}
  />
);

export default MyImage;
