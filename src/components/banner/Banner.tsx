/* eslint-disable @next/next/no-img-element */
import {
  ArrowImage,
  BackgroundGradient,
  ButtonBox,
  MainContent,
  SectionWrapper,
  SubContent,
} from "./Banner.styled";

interface BannerMain {
  image: string;
  title: string;
  subTitle: string;
  button: string;
  marginTop: string;
  width: string;
}
const BannerComponent = ({ bannerMain }:{ bannerMain: BannerMain[] }) => {
  const { title, subTitle, button, image, marginTop, width} = bannerMain[0];
  return (
      <><SectionWrapper>
      <div className="set">
        <div>
          <BackgroundGradient />
        </div>
        <img
          src={image}
          alt="banner"
          className="banner-image" />
      </div>
    </SectionWrapper>
    <MainContent marginTop={marginTop} width={width}>
        {title}
      </MainContent>
      <SubContent>
        {subTitle}
      </SubContent><ButtonBox>
        <button className="get-btn">
          {button}
          <ArrowImage src="images/button-Arrow.png" alt="arrow" />
        </button>
      </ButtonBox></>

  );
};

export default BannerComponent;
