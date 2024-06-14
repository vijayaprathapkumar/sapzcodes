/* eslint-disable react/no-unescaped-entities */
import CustomSlide, {
} from "@/ui-component/carousel/Carousel";
import React from "react";
import {
  AuthorImage,
  AuthorName,
  AuthorTitle,
  AuthorWarrper,
  Header,
  LeftArrowButton,
  RightArrowButton,
  SildeContainer,
  TestimonialAuthor,
  TestimonialCard,
  TestimonialText,
  Title,
  Warrper,
} from "./CustomerReview.Styled";
import { CustomItems } from "@/config/carousal";

interface TestimonialProps {
  text: string;
  author: string;
  title: string;
  imageSrc: string;
}

const CustomerReviewComponent = () => {
   const CustomerReviewSettings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <RightArrowButton />,
    prevArrow: <LeftArrowButton />,
  };

  const Testimonial = ({ text, author, title, imageSrc }: TestimonialProps) => (
    <TestimonialCard>
      <TestimonialText>{text}</TestimonialText>
      <br />
      <TestimonialAuthor>
        <AuthorImage src={imageSrc} alt="Author Avatar" />
        <AuthorWarrper>
          <AuthorName>{author}</AuthorName>
          <AuthorTitle>{title}</AuthorTitle>
        </AuthorWarrper>
      </TestimonialAuthor>
    </TestimonialCard>
  );

  return (
    <Warrper className="slider-container">
      <Header>TESTIMONIALS</Header>
      <Title>What Our Customer says</Title>
      <SildeContainer>
        <CustomSlide settings={CustomerReviewSettings}>
          {CustomItems.map((item, index) => (
            <Testimonial key={index} {...item} />
          ))}
        </CustomSlide>
      </SildeContainer>
    </Warrper>
  );
};

export default CustomerReviewComponent;
