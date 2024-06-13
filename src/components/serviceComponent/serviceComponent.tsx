/* eslint-disable @next/next/no-img-element */
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
  HeaderWarapper,
  ViewMoreLink,
} from "./serviceComponent.styled";
import { IoIosArrowForward } from "react-icons/io";

interface ServiceItem {
  cardBgColor: string;
  bgColor: string;
  icon: JSX.Element;
  title: string;
  titleColor: string;
  descriptionColor: string;
  description: string;
}
interface ServiceMain {
  headerTitle: string;
  title: string;
  subTitle: string;
}
interface ServiceComponentProps {
  serviceMain: ServiceMain[];
  serviceItems: ServiceItem[];
}
const ServiceComponent = ({
  serviceMain,
  serviceItems,
}: ServiceComponentProps) => {
  const sliderRef = useRef(null);
  const { headerTitle, title, subTitle } = serviceMain[0];
  const ServiceHeader = () => {
    return (
      <HeaderWarapper>
        <Header>{headerTitle}</Header>
        <Title>{title}</Title>
        <Subtitle>{subTitle}</Subtitle>
        <img src="/images/carsouleDots.png" alt="No Dots Img" />
      </HeaderWarapper>
    );
  };

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
    return ServicesItems.map((item: ServiceItem, index: number) => {
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
            <ViewMoreLink cardBgColor={cardBgColor}>
              View More <IoIosArrowForward />
            </ViewMoreLink>
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
