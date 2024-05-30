import React from "react";
import styled from "styled-components";
import { Wrapper, ArrowButton } from "./Arrow.styled";


interface ArrowButtonWrapperProps {
  onClickLeft?: () => void;
  onClickRight?: () => void;
  backgroundColor?: string;
}

const ArrowButtonCustom: React.FC<ArrowButtonWrapperProps> = ({
  onClickLeft,
  onClickRight,
  backgroundColor,
}) => {
  return (
    <Wrapper>
      {onClickLeft && (
        <ArrowButton onClick={onClickLeft} backgroundColor={backgroundColor}>
          <img src="images/arrowLeft.png" alt="Left Arrow" />
        </ArrowButton>
      )}
      {onClickRight && (
        <ArrowButton onClick={onClickRight} backgroundColor={backgroundColor}>
          <img src="images/arrowRight.png" alt="Right Arrow" />
        </ArrowButton>
      )}
    </Wrapper>
  );
};

export default ArrowButtonCustom;
