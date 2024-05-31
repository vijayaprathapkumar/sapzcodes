import React, { useRef } from "react";
import CustomSlide, {
  ServiceSettings,
} from "@/custom-component/carousel/Carousel";
import ArrowButtonCustom from "@/custom-component/arrow/Arrow";
import { theme } from "@/themes/theme";

import {
  Header,
  Title,
  Subtitle,
  ArrowButtonsContainer,
  StyledCardContainer,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  Wrapper,
  HeaderWarrper,
} from "./ServicePage.styled";
import { ServicesItems } from "@/config/carousal";

const ServiceComponent = () => {
  const sliderRef = useRef<any>(null);

  const ServiceHeader = () => {
    return (
      <>
        <Header>Our Services</Header>
        <Title>Experience Excellence: Delve into Our Range of Services</Title>
        <Subtitle>
          Sapcodes stands as epitome of innovation in management and technology
          consulting. As industry pioneers, we offer a dynamic suite of systems
          integration and consulting services that elevate your operations to a
          new heights of efficiency and profitability.
        </Subtitle>
      </>
    );
  };

  const ArrowButtons = () => {
    return (
      <ArrowButtonsContainer>
        <ArrowButtonCustom
          backgroundColor={"#fff"}
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
    return ServicesItems.map((item: any, index: any) => {
      const {
        cardBgColor,
        bgColor,
        icon,
        title,
        titleColor,
        descriptionColor,
        description,
      } = item;
      return (
        <StyledCardContainer key={index}>
          <ServiceCard cardBgColor={cardBgColor}>
            <ServiceIcon bgColor={bgColor}>{icon}</ServiceIcon>
            <ServiceTitle textColor={titleColor}>{title}</ServiceTitle>
            <ServiceDescription textColor={descriptionColor}>
              {description}
            </ServiceDescription>
          </ServiceCard>
        </StyledCardContainer>
      );
    });
  };

  return (
    <Wrapper>
      <HeaderWarrper>{ServiceHeader()}</HeaderWarrper>
      {ArrowButtons()}
      <CustomSlide settings={ServiceSettings} ref={sliderRef}>
        {ServiceItems()}
      </CustomSlide>
    </Wrapper>
  );
};

export default ServiceComponent;
