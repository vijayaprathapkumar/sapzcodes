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
} from "./ServicePage.styled";

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

  const ServiceItemElements = serviceItems.map((item, index) => (
    <StyledCardContainer key={index} >
      <ServiceCard cardBgColor={item.cardBgColor}>
        <ServiceIcon bgColor={item.bgColor}>{item.icon}</ServiceIcon>
        <ServiceTitle textColor={item.titleColor}>{item.title}</ServiceTitle>
        <ServiceDescription textColor={item.descriptionColor}>
          {item.description}
        </ServiceDescription>
      </ServiceCard>
    </StyledCardContainer>
  ));
  return (
    <Wrapper>
      <HeaderWarrper>{ServiceHeader()}</HeaderWarrper>
      {ArrowButtons()}
      <CustomSlide settings={ServiceSettings} ref={sliderRef}>
        {ServiceItemElements}
      </CustomSlide>
    </Wrapper>
  );
};

export default ServiceComponent;
