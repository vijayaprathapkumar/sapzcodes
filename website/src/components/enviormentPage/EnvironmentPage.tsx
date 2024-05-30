import CustomSlide from "@/custom-component/carousel/Carousel";
import React from "react";
import {
  RightArrow,
  LeftArrow,
  Heading,
  Container,
  Content,
  Title,
  SliderContainer,
  ContentWarrper,
  SubHeading,
} from "./EnvironmentPage.Styled";

const EnvironmentPage = () => {
 
  const Header = () => {
    return (
      <>
        <Heading>Our Working environment</Heading>
        <SubHeading>
          Sapcodes empowering work environment, where innovation thrives and
          collaboration fuels success. Experience a dynamic atmosphere that
          nurtures growth and brings out the best in everyone.
        </SubHeading>
      </>
    );
  };

  const CustomSlideData = () => {
    return (
      <>
        <ContentWarrper>
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc. It uses a dictionary of over 200 Latin
          words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable.
        </ContentWarrper>
      </>
    );
  };


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightArrow src="images/arrowRight.png" />,
    prevArrow: <LeftArrow src="images/arrowLeft.png" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <>
      {Header()}
      <Container className="banner-images">
        <Content>
          <Title>Empowering Success</Title>

          <SliderContainer>
            <CustomSlide settings={settings}>
              <CustomSlideData />
              <CustomSlideData />
            </CustomSlide>
          </SliderContainer>
        </Content>
      </Container>
    </>
  );
};

export default EnvironmentPage;
