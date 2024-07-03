import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import { styled } from "styled-components";

export const Container = styled.div`
  background: url("images/environment.png"), rgba(0, 0, 0, 0.6);
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  position: relative;
  margin-top: 80px;
  ${breakpoints.xs} {
    height: 50vh;
  }
`;

export const Content = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: ${theme.colors.dark};
`;

export const LeftArrow = styled.img`
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1);
`;

export const RightArrow = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 120%;
  ${breakpoints.xs} {
    left: 100%;
  }
  ${breakpoints.md} {
    left: 115%;
  }
  ${breakpoints.lg} {
    left: 100%;
  }
  ${breakpoints.xl} {
    left: 120%;
  }
`;
export const Title = styled.h1`
  color: ${theme.colors.white};
  font-size: 40px;
  line-height: 48px;
  ${breakpoints.xs} {
    font-size: 24px;
    margin-bottom: 20px;
  }
   ${breakpoints.md} {
    font-size: 22px;
    margin-bottom: -30px;
  }
  ${breakpoints.lg} {
    font-size: 38px;
    margin-bottom: 0px;
  }
`;

export const SliderContainer = styled.div`
  margin: 0 auto;
  ${breakpoints.xs} {
    width: 320px;
  }

  ${breakpoints.sm} {
    width: 490px;
  }
  ${breakpoints.lg} {
    width: 950px;
  }
`;

export const Heading = styled.div`
  text-align: center;
  ${breakpoints.xs} {
    font-size: 22px;
    font-weight: 800;
    margin-top: 70px;
  }
  ${breakpoints.sm} {
    font-size: 36px;
  }
  ${breakpoints.md} {
    margin-top: 140px;
  }
  ${breakpoints.lg} {
    font-size: 40px;
    font-weight: 700;
    margin-top: 80px;
    line-height: 48px;
  }
  ${breakpoints.xl} {
    margin-top: 70px;
  }
`;

export const SubHeading = styled.p`
  margin: 20px auto;
  ${breakpoints.xs} {
    max-width: 440px;
    text-align: center;
    font-size: 12px;
    padding:0 7%;
  }
  ${breakpoints.sm} {
    max-width: 840px;
    font-size: 22px;
    width: 660px;
  }
  ${breakpoints.lg} {
    width: 800px;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
  }
`;

export const ContentWarrper = styled.div`
  margin-left: 50px;
  height: 72px;
  color: ${theme.colors.white};
  text-align: center;
  font-weight: 400;
  font-size: 19px;
  ${breakpoints.xs} {
    margin: 0 auto;
    font-size: 14px;
  }
  ${breakpoints.sm} {
    margin: 40px auto;
    font-size: 26px;
  }
   ${breakpoints.md} {
    margin: 40px auto;
    font-size: 18px;
  }
  ${breakpoints.lg} {
    font-size: 18px;
    margin-bottom: 10px;
  }
  ${breakpoints.xl} {
    font-size: 16px;
  }
`;

export const Bolder = styled.span`
  font-weight: bold;
  font-size: 16px;
`;
