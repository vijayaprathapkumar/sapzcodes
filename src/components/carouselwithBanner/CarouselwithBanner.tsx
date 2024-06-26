/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import CustomSlide from "@/ui-component/carousel/Carousel";
import ArrowButtonCustom from "@/ui-component/arrow/Arrow";
import { theme } from "@/themes/theme";

import { ArrowButtonsContainer, Wrapper } from "./CarouselwithBanner.styled";
import MediumCard from "@/ui-component/card/Card";
import CustomTitle from "@/ui-component/title/Title";
import { IoIosArrowForward } from "react-icons/io";

interface ServiceItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

type BannerTitleProps = {
  title: string;
  subTitle: string;
  description: string;
};

type CarouselWithBannerProps = {
  bannerTitle: BannerTitleProps;
  carouselItemData: ServiceItem[];
};

const CarouselwithBannerComponent = (props: CarouselWithBannerProps) => {
  const { bannerTitle, carouselItemData } = props;

  const CarouselwithBannerSettings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
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
  const sliderRef = useRef(null);
  const ArrowButtons = () => {
    return (
      <ArrowButtonsContainer>
        <ArrowButtonCustom
          backgroundColor={theme.colors.white}
          sliderRef={sliderRef}
          direction="left"
        />
        <ArrowButtonCustom
          backgroundColor={theme.colors.green}
          sliderRef={sliderRef}
          direction="right"
        />
      </ArrowButtonsContainer>
    );
  };

  const ServiceItems = () => {
    const viewMore = {
      text: "View More",
      textIcon: <IoIosArrowForward />,
      href: '/service'
    }
    
    return carouselItemData?.map((item: ServiceItem, index: number) => {
      const cardProps = {
        ...item,
        viewMore,
      };
      return (
        <React.Fragment key={index}>
          <MediumCard cardItems={cardProps} />
        </React.Fragment>
      );
    });
  };

  return (
    <Wrapper className="layout-gap">
      <CustomTitle {...bannerTitle} alignMent="start" />
      {ArrowButtons()}
      <CustomSlide settings={CarouselwithBannerSettings} ref={sliderRef}>
        {ServiceItems()}
      </CustomSlide>
    </Wrapper>
  );
};

export default CarouselwithBannerComponent;
