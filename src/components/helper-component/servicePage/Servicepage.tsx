import React, { useState } from "react";
import { ServicesItemsAll } from "@/config/carousal";
import { IoIosArrowForward } from "react-icons/io";
import {
  StyledCardContainer,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,

  ViewMoreLink,
  Warpper,
  Title,
  SubTitle,
  Description,
  ServiceItemsContainer,
  ServiceDescription,
} from "./Servicepage.styled";

const Servicepage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number | null) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const renderServiceItems = () => {
    return ServicesItemsAll.map((item, index) => {
      const {
        cardBgColor,
        bgColor,
        icon,
        title,
        titleColor,
        descriptionColor,
        description,
      } = item;

      const truncatedDescription =
        description.length > 150
          ? `${description.slice(0, 150)}...`
          : description;

      return (
        <StyledCardContainer key={index}>
          <ServiceCard
            cardBgColor={cardBgColor}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <ServiceIcon bgColor={bgColor}>{icon}</ServiceIcon>
            <ServiceTitle textColor={titleColor}>{title}</ServiceTitle>
            <ServiceDescription textColor={descriptionColor}>
              {hoveredIndex === index ? description : truncatedDescription}
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
    <Warpper>
      <Title>OUR SERVICE</Title>
      <SubTitle>OUR EXPERTISE</SubTitle>
      <Description>
        Welcome to Sapzcodes! We are a leading technology solutions provider
        offering a wide range of services to meet your business needs. Our team
        of experts specializes in various domains and technologies, ensuring
        top-notch solutions for your organization. Below are the services
        provided by Sapzcodes:
      </Description>
      <ServiceItemsContainer>{renderServiceItems()}</ServiceItemsContainer>
    </Warpper>
  );
};

export default Servicepage;
