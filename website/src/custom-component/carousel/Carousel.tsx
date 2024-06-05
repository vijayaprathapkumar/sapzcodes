import {
  LeftArrowButton,
  RightArrowButton,
} from "@/components/customerReview/CustomerReview.Styled";
import {
  LeftArrow,
  RightArrow,
} from "@/components/enviormentPage/EnvironmentPage.Styled";
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
export const ServiceSettings = {
  ...commonSettings,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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

export const EnvironmentSettings = {
  ...commonSettings,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  nextArrow: <RightArrow src="images/arrowRight.png" />,
  prevArrow: <LeftArrow src="images/arrowLeft.png" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

export const CustomerReviewSettings = {
  ...commonSettings,
  slidesToShow: 2,
  slidesToScroll: 2,
  nextArrow: <RightArrowButton />,
  prevArrow: <LeftArrowButton />,
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
