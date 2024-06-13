import styled from "styled-components";
import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";

export const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 0;
`;

export const Title = styled.h4`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.6px;
  color: ${theme.colors.green};
  margin-top: 20px;
`;
export const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: calc(0.18 * 0.5 / 100);
  margin-top: 20px;
  ${breakpoints.xs} {
    font-size: 22px;
    margin-top: 10px;
  }
  ${breakpoints.lg} {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  height: 72px;
  text-align: center;
  display: flex;
  justify-content: center;
  font-weight: 400;
  line-height: 24px;
  font-size: 16px;
  ${breakpoints.xs} {
    width: 340px;
    margin-top: 10px;
  }
  ${breakpoints.md} {
    width: 630px !important;
    margin-top: 20px;
  }
  ${breakpoints.lg} {
    width: 920px !important;
  }
`;

export const Wrapper = styled.div`
  height: 672px;
  margin-left: 35px;
  background-color: ${theme.colors.white};
  background: linear-gradient(
    90deg,
    ${theme.colors.white} 998px,
    ${theme.colors.lightgreen} 50%
  );

  ${breakpoints.xs} {
    margin-left: -10px;
  }
  ${breakpoints.lg} {
    background: linear-gradient(
      90deg,
      ${theme.colors.white} 758px,
      ${theme.colors.lightgreen} 50%
    );
  }
  ${breakpoints.xl} {
    margin-left: 30px;
    background: linear-gradient(
      90deg,
      ${theme.colors.white} 998px,
      ${theme.colors.lightgreen} 50%
    );
  }
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: 600;
  width: 570px;
  line-height: 21.6px;
  color: ${theme.colors.green};
  margin-top: 20px;
`;

export const ServiceCard = styled.div<{ cardBgColor?: string }>`
  background-color: ${(props) => props.cardBgColor || theme.colors.white};
  padding: 70px 20px 20px 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  border: 0.5px solid ${theme.colors.lightnav};
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    width: 330px !important;
    height: auto;
    transform: scale(1.05);
  }

  ${breakpoints.xs} {
    height: 430px;
    margin-left: 30px;
  }
  ${breakpoints.md} {
    width: 330px !important;
    height: 450px;
  }
  ${breakpoints.lg} {
    width: 290px !important;
    height: 450px;
  }
  ${breakpoints.xl} {
    width: 336px !important;
    height: 400px;
  }
`;

export const HeaderWrapper = styled.div`
  img {
    position: absolute;
    left: -39px;
    width: 130px;
    height: 130px;
  }
  ${breakpoints.xs} {
    img {
      top: 350px;
      left: -29px;
      width: 100px;
      height: 100px;
    }
  }
  ${breakpoints.md} {
    img {
      top: 380px;
      left: -29px;
      width: 100px;
      height: 100px;
    }
  }
  ${breakpoints.lg} {
    img {
      top: 365px;
    }
  ${breakpoints.xl} {
    img {
      top: 296px;
      left: -39px;
      width: 130px;
      height: 130px;
    }
  }
`;

export const ServiceIcon = styled.div<{ bgColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor || theme.colors.white};
  color: ${theme.colors.white};
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ServiceTitle = styled.h3<{ textColor?: string }>`
  font-size: 21px;
  font-weight: 700;
  margin-top: 20px;
  line-height: 28.8px;
  color: ${(props) => props.textColor || theme.colors.dark};
  text-align: left;
`;

export const ServiceDescription = styled.p<{ textColor?: string }>`
  font-size: 16px;
  margin-top: 20px;
  line-height: 24px;
  font-weight: 400;
  color: ${(props) => props.textColor || theme.colors.lightgrey};
  text-align: left;

  ${ServiceCard}:hover & {
    -webkit-line-clamp: unset;
    height: auto;
    overflow: visible;
  }

  ${breakpoints.lg} {
    font-size: 17px;
    margin-top: 20px;
  }
  ${breakpoints.xl} {
    font-size: 15px;
    margin-top: 20px;
    color: ${(props) => props.textColor || theme.colors.lightgrey};
  }
`;
export const ViewMoreLink = styled.a<{ cardBgColor?: string }>`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  text-decoration: underline;
  display: flex;
  align-items: center;
  position: relative;
  top: 10px;
  color: ${(props) =>
    props.cardBgColor === theme.colors.green
      ? theme.colors.white
      : theme.colors.grey};

  svg {
    margin-left: 5px;
  }
`;

export const ArrowButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-right: 10px;
  margin-top: -60px;
  ${breakpoints.xs} {
    margin-top: 0px;
  }
  ${breakpoints.md} {
    margin-top: -40px;
  }
  ${breakpoints.lg} {
    margin-top: -55px;
  }
`;

export const StyledCardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const SubHeader = styled.p`
  font-size: 26px;
  font-weight: 600;
  color: ${theme.colors.navy};
`;

export const Subtitle = styled.p`
  color: ${theme.colors.grey};
  margin-bottom: 32px;
  font-weight: 400;
  margin-top: 30px;
  ${breakpoints.xs} {
    width: 300px;
    font-size: 14px;
  }
  ${breakpoints.md} {
    width: 670px;
    font-size: 22px;
  }
  ${breakpoints.lg} {
    width: 920px;
    line-height: 24px;
  }
  ${breakpoints.xl} {
    width: 920px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Bolder = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

export const ServiceItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  ${breakpoints.xs} {
    margin-top: 100px;
    margin-left: 20px;
  }
  ${breakpoints.md} {
    margin-top: 30px;
    margin-left: 20px;
  }
  ${breakpoints.lg} {
    margin: 0 0 20px 15px;
  }
`;
