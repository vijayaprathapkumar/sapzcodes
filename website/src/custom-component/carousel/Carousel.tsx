import React, { ReactNode, Ref } from "react";
import Slider, { Settings } from "react-slick";

interface CustomSlideProps {
  settings: Settings;
  children: ReactNode;
}

const CustomSlide = React.forwardRef(
  ({ settings, children }: CustomSlideProps, ref: Ref<Slider>) => {
    return (
      <Slider {...settings} ref={ref}>
        {children}
      </Slider>
    );
  }
);

CustomSlide.displayName = "CustomSlide";

export default CustomSlide;
