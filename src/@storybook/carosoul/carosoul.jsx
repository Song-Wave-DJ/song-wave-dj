import { Carousel as CarouselComp } from "antd";

export const Carousel = ({ children }) => {
  return <CarouselComp autoplay>{children}</CarouselComp>;
};
