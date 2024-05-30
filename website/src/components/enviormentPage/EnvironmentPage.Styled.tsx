import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import { styled } from "styled-components";
export const Container = styled.div`
  background: url("images/environment.png"), rgba(0, 0, 0, 0.6);
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  height: 90vh;
  font-weight: bold;
  position: relative;
  margin-top: 80px;
  ${breakpoints.xs} {
    height: 70vh;
  }
   ${breakpoints.lg} {
    height: 92vh;
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
  color: black;
`;

export const LeftArrow = styled.img`
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1);
`;

export const RightArrow = styled.img`
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1);
`;
export const Title = styled.h1`
  color: ${theme.colors.white};
`;

export const SliderContainer = styled.div`
  margin: 0 auto;
  width: 800px;
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
    text-align: center;
    font-size: 18px;
    font-weight: 600;
  }
  ${breakpoints.sm} {
    text-align: center;
    text-align: center;
    font-size: 36px;
  }
  ${breakpoints.lg} {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-top:100px;
  }
`;

export const SubHeading = styled.p`
  max-width: 840px;
  margin: 20px auto;
  ${breakpoints.xs} {
    max-width: 440px;
    margin: 20px auto;
    text-align: center;
    font-size: 12px;
  }
  ${breakpoints.sm} {
    max-width: 840px;
    margin: 20px auto;
    font-size: 22px;
    text-align: center;
    width: 660px;
  }
  ${breakpoints.lg} {
    max-width: 780px;
    font-size: 17.6px;
    text-align: justify;
  }
`;

export const ContentWarrper = styled.div`
  width: 700px;
  margin-left: 50px;
  color: ${theme.colors.white};
  text-align: center;
  font-weight: 400;
  font-size: 19px;
  ${breakpoints.xs} {
    width: 290px;
    margin: 0 auto;
    color: ${theme.colors.white};
    text-align: center;
    font-size: 14px;
  }
  ${breakpoints.sm} {
    width: 450px;
    margin: 40px auto;
    color: ${theme.colors.white};
    text-align: center;
    font-size: 26px;
  }
  ${breakpoints.md} {
    width: 490px;
  }
  ${breakpoints.lg} {
    width: 850px;
    margin: 40px auto;
    color: ${theme.colors.white};
    text-align: center;
    font-size: 20px;
  }
`;
