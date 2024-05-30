/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import {
  ArrowButtonsContainer,
  Header,
  HeaderWarrper,
  ServiceCard,
  ServiceDescription,
  ServiceIcon,
  ServiceTitle,
  StyledCardContainer,
  Subtitle,
  Title,
  Wrapper,
} from "./ServicePage.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlide from "@/custom-component/carousel/Carousel";
import ArrowButtonCustom from "@/custom-component/arrow/Arrow";
import { theme } from "@/themes/theme";

const ServicePage = () => {
  const sliderRef = useRef<any>(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const servicesItems = [
    {
      title: "Your Partner for Excellence PCOE Certified",
      icon: <img src="images/Suitcase.png" alt="Suitcase" />,
      description:
        "Our PCOE-certified team ensures expertise and capabilities to handle complex business needs, meeting SAP's highest standards. Experience excellence with us.",
      bgColor: `${theme.colors.white}`,
      cardBgColor: `${theme.colors.green}`,
      titleColor: `${theme.colors.white}`,
      descriptionColor: `${theme.colors.white}`,
    },
    {
      title:
        "Drive Business Excellence with Our Dedicated Center of Excellence",
      icon: <img src="images/MoneyCoinDollar.png" alt="No MoneyCoinDollar" />,
      description:
        "50+ SAP experts at Sapcodes drive excellence with a dedicated Center of Excellence. We ensure compliance and foster continuous improvements for the highest standards.",
      bgColor: `${theme.colors.dark}`,
      cardBgColor: `${theme.colors.white}`,
      titleColor: `${theme.colors.navy}`,
      descriptionColor: `${theme.colors.navy}`,
    },
    {
      title: "Sapcodes Cutting Edge Cloud Services",
      icon: <img src="images/LightBulb.png" alt="No LightBulb" />,
      description:
        "Boost productivity, streamline workflows, and reduce costs with our expert team and cutting-edge technologies. Scale and succeed in today's business landscape.",
      bgColor: `${theme.colors.dark}`,
      cardBgColor: `${theme.colors.white}`,
      titleColor: `${theme.colors.navy}`,
      descriptionColor: `${theme.colors.navy}`,
    },
    {
      title: "Elevate Customer Experience",
      icon: <img src="images/UserProfile.png" alt="No UserProfile" />,
      description:
        "Sapcodes E-commerce Services. Engage customers uniquely, foster repeat business, and maximize your potential for success.",
      bgColor: `${theme.colors.dark}`,
      cardBgColor: `${theme.colors.white}`,
      titleColor: `${theme.colors.navy}`,
      descriptionColor: `${theme.colors.navy}`,
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
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

  return (
    <Wrapper>
      <HeaderWarrper>
        <Header>Our Services</Header>
        <Title>Experience Excellence: Delve into Our Range of Services</Title>
        <Subtitle>
          Sapcodes stands as epitome of innovation in management and technology
          consulting. As industry pioneers, we offer a dynamic suite of systems
          integration and consulting services that elevate your operations to a
          new heights of efficiency and profitability.
        </Subtitle>
      </HeaderWarrper>
      <ArrowButtonsContainer>
        <ArrowButtonCustom onClickLeft={prevSlide} backgroundColor={"#fff"} />
        <ArrowButtonCustom
          onClickRight={nextSlide}
          backgroundColor={`${theme.colors.green}`}
        />
      </ArrowButtonsContainer>

      <CustomSlide settings={settings} ref={sliderRef}>
        {servicesItems.map((item, index) => (
          <StyledCardContainer key={index}>
            <ServiceCard cardBgColor={item.cardBgColor}>
              <ServiceIcon bgColor={item.bgColor}>{item.icon}</ServiceIcon>
              <ServiceTitle textColor={item.titleColor}>
                {item.title}
              </ServiceTitle>
              <ServiceDescription textColor={item.descriptionColor}>
                {item.description}
              </ServiceDescription>
            </ServiceCard>
          </StyledCardContainer>
        ))}
      </CustomSlide>
    </Wrapper>
  );
};

export default ServicePage;
