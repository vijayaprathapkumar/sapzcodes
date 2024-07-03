import React from "react";
import { Warpper, Title, SubTitle, Description } from "./Title.styled";

const CustomTitle = (props: any) => {
  const { title, subTitle, description, alignMent = "center" } = props;
  return (
    <Warpper alignMent={alignMent}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      {description && (
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      )}
    </Warpper>
  );
};

export default CustomTitle;
