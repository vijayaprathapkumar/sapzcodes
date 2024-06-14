import React from "react";
import { Warpper, Title, SubTitle, Description } from "./Title.styled";

const CustomTitle = (props: any) => {
  const { title, subTitle, description, alignMent = "center" } = props;
  return (
    <Warpper alignMent={alignMent}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Description>{description}</Description>
    </Warpper>
  );
};

export default CustomTitle;
