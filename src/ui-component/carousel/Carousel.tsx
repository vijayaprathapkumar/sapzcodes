import React, { ReactNode, Ref } from "react";
import Slider, { Settings } from "react-slick";

interface CustomSlideProps {
  settings: Settings;
  children: ReactNode;
}

const commonSettings = {
  infinite: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        speed: 500,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 500,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const CustomSlide = React.forwardRef(
  ({ settings, children }: CustomSlideProps, ref: Ref<Slider>) => {
    const mergedSettings = { ...commonSettings, ...settings };
    return (
      <Slider {...mergedSettings} ref={ref}>
        {children}
      </Slider>
    );
  }
);

CustomSlide.displayName = "CustomSlide";

export default CustomSlide;
