/* eslint-disable react/no-unescaped-entities */
import CustomSlide, {
  CustomerReviewSettings,
} from "@/custom-component/carousel/Carousel";
import React from "react";
import {
  AuthorImage,
  AuthorName,
  AuthorTitle,
  ContentWarrper,
  Header,
  SildeContainer,
  TestimonialAuthor,
  TestimonialCard,
  TestimonialText,
  Title,
  Warrper,
} from "./CustomerReview.Styled";
import { CustomItems } from "@/config/carousal";

const CustomerReviewComponent = () => {
  const Testimonial = ({ text, author, title, imageSrc }: any) => (
    <ContentWarrper>
      <TestimonialCard>
        <TestimonialText>{text}</TestimonialText>
        <br />
        <TestimonialAuthor>
          <AuthorImage src={imageSrc} alt="Author Avatar" />
          <div>
            <AuthorName>{author}</AuthorName>
            <AuthorTitle>{title}</AuthorTitle>
          </div>
        </TestimonialAuthor>
      </TestimonialCard>
    </ContentWarrper>
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
