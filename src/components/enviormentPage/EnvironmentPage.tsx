import React from "react";
import CustomSlide, {
} from "@/ui-component/carousel/Carousel";
import {
  Heading,
  Container,
  Content,
  Title,
  SliderContainer,
  ContentWarrper,
  SubHeading,
  Bolder,
  RightArrow,
  LeftArrow,
} from "./EnvironmentPage.Styled";
import { EnvironmentItems } from "@/config/carousal";

const EnvironmentComponent = () => {
  const EnvironmentSettings = {
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

  const Header = () => (
    <>
      <Heading>Our Working Environment</Heading>
      <SubHeading>
        <Bolder>SAPZCODES</Bolder> empowering work environment, where innovation
        thrives and collaboration fuels success. Experience a dynamic atmosphere
        that nurtures growth and brings out the best in everyone.
      </SubHeading>
    </>
  );

  return (
    <>
      {Header()}
      <Container>
        <Content>
          <Title>Empowering Success</Title>
          <SliderContainer>
            <CustomSlide settings={EnvironmentSettings}>
              {EnvironmentItems.map((item, index) => {
                const { content } = item;
                return <ContentWarrper key={index}>{content}</ContentWarrper>;
              })}
            </CustomSlide>
          </SliderContainer>
        </Content>
      </Container>
    </>
  );
};

export default EnvironmentComponent;
