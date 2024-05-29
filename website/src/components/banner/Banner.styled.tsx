import { styled } from "styled-components";

export const BannerWrapper = styled.div`
  min-height: 70vh;
  :after,
  :before {
    border: 0 solid #e5e7eb;
    box-sizing: border-box;
  }
`;

export const SectionWrapper = styled.section`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  .relative{
    position: relative;
  }
  .bg-gardion{
    position: absolute;
    top: 0;
    height: auto;
    max-width: 100%;
  }
`;

export const BackgroundGradient = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(27, 17, 9, 1) 2%,
    rgba(158, 159, 163, 1) 100%
  );
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
`;
