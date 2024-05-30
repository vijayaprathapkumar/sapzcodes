/* eslint-disable @next/next/no-img-element */
import {
  ArrowImage,
  BackgroundGradient,
  BannerWrapper,
  ButtonBox,
  GetButton,
  MainContent,
  SectionWrapper,
  SubContent,
} from "./Banner.styled";

const BannerComponent = () => {
  return (
    <BannerWrapper>
      <SectionWrapper>
        <div className="relative">
          <div>
            <BackgroundGradient />
          </div>
          <img
            src="images/banner.png"
            alt="banner"
            className="banner-image"
          />
        </div>
      </SectionWrapper>
      <MainContent>
       Propel our business and achieve new height with Sapcodes transformative solutions.
      </MainContent>
      <SubContent>
      Streamline processes, gain insights, and make data-driven decisions with VMA Tech Labs. Our tailored technology propels success for businesses of all sizes. Embrace the future of business management, unlock growth opportunities, and thrive with us today.
      </SubContent>
      <ButtonBox>
      <GetButton>
        Get A Quote
        <ArrowImage src="images/button-Arrow.png" alt="arrow"/>
      </GetButton>
      </ButtonBox>
    </BannerWrapper>
  );
};

export default BannerComponent;
///images/button-Arrow.png
///images/banner.png