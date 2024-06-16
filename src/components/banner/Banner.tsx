/* eslint-disable @next/next/no-img-element */
import {
  ArrowImage,
  BackgroundGradient,
  ButtonBox,
  ContentWrapper,
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
const BannerComponent = ({ bannerMain }: { bannerMain: BannerMain[] }) => {
  const { title, subTitle, button, image, marginTop, width } = bannerMain[0];
  return (
    <>
      <SectionWrapper>
        <BackgroundGradient />
        <img src={image} alt="banner" className="banner-image" />
        <ContentWrapper  className="layout-gap">
          <MainContent marginTop={marginTop} width={width}>
            {title}
          </MainContent>
          <SubContent>{subTitle}</SubContent>
          {/* <ButtonBox>
              {button}
              <ArrowImage src="images/button-Arrow.png" alt="arrow" />
          </ButtonBox> */}
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

export default BannerComponent;
