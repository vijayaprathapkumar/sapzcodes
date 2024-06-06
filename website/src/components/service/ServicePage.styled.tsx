import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  height: 672px;
  background-color: ${theme.colors.white};
  background: linear-gradient(
    90deg,
    ${theme.colors.white} 998px,
    ${theme.colors.lightgreen} 50%
  );

  ${breakpoints.lg} {
    background: linear-gradient(
      90deg,
      ${theme.colors.white} 758px,
      ${theme.colors.lightgreen} 50%
    );
  }
  ${breakpoints.xl} {
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
  line-height: 21.6px;
  color: ${theme.colors.green};
`;

export const ServiceCard = styled.div<{ cardBgColor?: string }>`
  background-color: ${(props) => props.cardBgColor || theme.colors.white};
  padding: 40px 20px 20px 25px;
  margin: 0 20px 0 20px;
  width: 300px !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 300px;
  border: 0.5px solid ${theme.colors.lightnav};
  ${breakpoints.md} {
    height:325px;
  }
  ${breakpoints.lg} {
    width: 450px !important;
  }
  ${breakpoints.xl} {
    width: 320px !important;
    height: 349px;
  }
`;

export const HeaderWarapper = styled.div`
  img {
    position: absolute;
   
    left: -39px;
    width: 130px;
    height: 130px;
  }
  ${breakpoints.xs} {
    img {
      top: 340px;
    }
  ${breakpoints.md} {
    img {
      top: 380px;
    }
  ${breakpoints.lg} {
    img {
      top: 365px;
    }
  ${breakpoints.xl} {
    img {
      top: 260px;
    }
  }
`;

export const ServiceIcon = styled.div<{ bgColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor || theme.colors.white};
  color: ${theme.colors.white};
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ServiceTitle = styled.h3<{ textColor?: string }>`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${(props) => props.textColor || theme.colors.dark};
`;

export const ServiceDescription = styled.p<{ textColor?: string }>`
  font-size: 14px;
  margin-top: 20px;
  line-height: 1.5;
  color: ${(props) => props.textColor || theme.colors.lightgrey};
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
  margin-left: 20px;
`;

export const SubHeader = styled.p`
  font-size: 26px;
  font-weight: 600;
  color: ${theme.colors.navy};
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: ${theme.colors.dark};
  margin-bottom: 16px;

  ${breakpoints.xs} {
    width: 250px;
    font-size: 17px;
  }
  ${breakpoints.md} {
    width: 640px;
    font-size: 34px;
  }
  ${breakpoints.xl} {
    width: 640px;
    font-size: 40px;
    line-height: 48px;
  }
`;

export const Subtitle = styled.p`
  color: ${theme.colors.grey};
  margin-bottom: 32px;
  ${breakpoints.xs} {
    width: 300px;
    font-size: 14px;
  }
  ${breakpoints.md} {
    width: 670px;
    font-size: 22px;
  }
  ${breakpoints.lg} {
    width: 640px;
  }
  ${breakpoints.xl} {
    width: 920px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const HeaderWarrper = styled.div`
  margin-left: 50px;
  position: relative;
  top: 50px;
  ${breakpoints.xs} {
    top: 20px;
  }
`;
