/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AboutDiv, DetailWrapper, MainWrapper } from "./Details.styled";
import Link from "next/link";

interface Detail {
  image: string;
  title: string;
  subTitle: string;
  description: string;
  objectFit?: string;
  imageAlignment: string;
  background?: string;
  border?: string;
  height: string;
  width: string;
  marginTop: string;
  marginLeft: string;
  imgDots?: string;
  img?: string;
  imgLight?: string;
  imgDark?: string;
  button: {
    text?: string ;
  };
}

const DetailComponent = ({ detail }: { detail: any }) => {
  const {
    image,
    title,
    subTitle,
    description,
    objectFit,
    imageAlignment,
    background,
    border,
    height,
    width,
    marginTop,
    button,
    marginLeft,
    img,
    imgDots,
    imgDark,
    imgLight,
  } = detail;
  return (
    <MainWrapper background={background} imageAlignment={imageAlignment}>
      <AboutDiv>
        <h4>{title}</h4>
        <h2>{subTitle}</h2>
        <p>{description}</p>
        {button && (
          <button>
            <Link href={"/careers"}>
              {button.text}
              <img
                src="/images/Button_Arrow.png"
                alt="Arrow"
                width={27}
                height={13}
              />
            </Link>
          </button>
        )}
      </AboutDiv>
      <DetailWrapper
        objectFit={objectFit}
        imageAlignment={imageAlignment}
        border={border}
        height={height}
        width={width}
        marginTop={marginTop}
        marginLeft={marginLeft}
      >
        <img src={image} alt="About" />
      </DetailWrapper>
      {img && <img src={img} alt="dots" className="image" />}
      {imgDots && <img src={imgDots} alt="dots" className="dots" />}
      {imgDark && <img src={imgDark} alt="dark" className="dark" />}
      {imgLight && <img src={imgLight} alt="light" className="light" />}
    </MainWrapper>
  );
};

export default DetailComponent;
