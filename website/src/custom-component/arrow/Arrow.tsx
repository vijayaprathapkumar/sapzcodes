/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { Wrapper, ArrowButton } from "./Arrow.styled";

interface ArrowButtonWrapperProps {
  sliderRef: any;
  direction: "left" | "right";
  backgroundColor?: string;
}

const ArrowButtonCustom: React.FC<ArrowButtonWrapperProps> = ({
  sliderRef,
  direction,
  backgroundColor,
}) => {

  const handleSlide = () => {
    if (sliderRef.current) {
      direction === "left" ? sliderRef.current.slickPrev() : sliderRef.current.slickNext();
    }
  };

  return (
    <Wrapper>
      <ArrowButton onClick={handleSlide} backgroundColor={backgroundColor}>
        <img
          src={`images/arrow${direction === "left" ? "Left" : "Right"}.png`}
          alt={`${direction === "left" ? "Left" : "Right"} Arrow`}
        />
      </ArrowButton>
    </Wrapper>
  );
};

export default ArrowButtonCustom;
