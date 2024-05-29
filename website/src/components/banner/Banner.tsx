import {
  BackgroundGradient,
  BannerWrapper,
  SectionWrapper,
} from "./Banner.styled";

const BannerComponent = () => {
  return (
    <BannerWrapper>
      <SectionWrapper>
        <div className="relative">
          <div>
            <img
              src="https://vmatechlabs.com/static/media/colleagues.dfd046f67c1aa0022ba5.png"
              alt="banner"
              className="bg-gardion"
            />
            <BackgroundGradient />
          </div>
          <img
            src="https://vmatechlabs.com/static/media/colleagues.dfd046f67c1aa0022ba5.png"
            alt="banner"
          />
        </div>
      </SectionWrapper>
    </BannerWrapper>
  );
};

export default BannerComponent;
