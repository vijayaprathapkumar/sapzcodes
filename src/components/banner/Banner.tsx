/* eslint-disable @next/next/no-img-element */
import {
  ArrowImage,
  BackgroundGradient,
  ButtonBox,
  MainContent,
  SectionWrapper,
  SubContent,
} from "./Banner.styled";

const BannerComponent = () => {
  return (
      <><SectionWrapper>
      <div className="set">
        <div>
          <BackgroundGradient />
        </div>
        <img
          src="images/banner.png"
          alt="banner"
          className="banner-image" />
      </div>
    </SectionWrapper><MainContent>
        Propel our business and achieve new height with SAPZCODES transformative solutions.
      </MainContent><SubContent>
        Streamline processes, gain insights, and make data-driven decisions with  <span className="bold-text">SAPZCODES</span>. Our tailored technology propels success for businesses of all sizes. Embrace the future of business management, unlock growth opportunities, and thrive with us today.
      </SubContent><ButtonBox>
        <button className="get-btn">
          Get A Quote
          <ArrowImage src="images/button-Arrow.png" alt="arrow" />
        </button>
      </ButtonBox></>

  );
};

export default BannerComponent;
