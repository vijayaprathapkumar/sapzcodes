/* eslint-disable react/no-unescaped-entities */
import CustomSlide from "@/custom-component/carousel/Carousel";
import React from "react";
import {
  AuthorImage,
  AuthorName,
  AuthorTitle,
  ContentWarrper,
  Header,
  LeftArrow,
  RightArrow,
  SildeContainer,
  TestimonialAuthor,
  TestimonialCard,
  TestimonialText,
  Title,
  Warrper,
} from "./CustomerReview.Styled";

const CustomerReview = () => {
  function CustomSlideData() {
    return (
      <ContentWarrper>
        <TestimonialCard>
          <TestimonialText>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley.
          </TestimonialText>
          <br />
          <TestimonialAuthor>
            <AuthorImage src="images/AuthorImg1.png" alt="Author Avatar" />
            <div>
              <AuthorName>John Doe</AuthorName>
              <AuthorTitle>CEO, Company Name</AuthorTitle>
            </div>
          </TestimonialAuthor>
        </TestimonialCard>
      </ContentWarrper>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <Warrper className="slider-container">
      <Header>TESTIMONIALS</Header>
      <Title>What Our Customer says</Title>
      <SildeContainer>
        <CustomSlide settings={settings}>
          <CustomSlideData />
          <CustomSlideData />
          <CustomSlideData />
        </CustomSlide>
      </SildeContainer>
    </Warrper>
  );
};

export default CustomerReview;
