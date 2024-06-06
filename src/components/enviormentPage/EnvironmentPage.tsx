import React from "react";
import CustomSlide, {
  EnvironmentSettings,
} from "@/custom-component/carousel/Carousel";
import {
  Heading,
  Container,
  Content,
  Title,
  SliderContainer,
  ContentWarrper,
  SubHeading,
} from "./EnvironmentPage.Styled";
import { EnvironmentItems } from "@/config/carousal";

const EnvironmentComponent = () => {
  const Header = () => (
    <>
      <Heading>Our Working Environment</Heading>
      <SubHeading>
        Sapcodes empowering work environment, where innovation thrives and
        collaboration fuels success. Experience a dynamic atmosphere that
        nurtures growth and brings out the best in everyone.
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
                return (
                  <ContentWarrper key={index}>
                    {content}
                  </ContentWarrper>
                );
              })}
            </CustomSlide>
          </SliderContainer>
        </Content>
      </Container>
    </>
  );
};

export default EnvironmentComponent;
