import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  height: 730.43px;
  margin-left: 35px;
  background-color: ${theme.colors.white};
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
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
  font-size: 20px;
  font-weight: 600;
  width: 570px;
  line-height: 21.6px;
  color: ${theme.colors.green};
  ${breakpoints.xs} {
    font-size: 16px;
  }
  ${breakpoints.md} {
    font-size: 18px;
  }
`;
export const ServiceCard = styled.div<{ cardBgColor?: string }>`
  background-color: ${(props) => props.cardBgColor || theme.colors.white};
  padding: 40px 20px 20px 25px;
  margin: 0 20px 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 0.5px solid ${theme.colors.lightnav};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    height: 368px;
  }

  ${breakpoints.xs} {
    height: 399px;
  }
  ${breakpoints.md} {
    width: 330px !important;
    height: 379px;
  }
  ${breakpoints.lg} {
    width: 450px !important;
  }
  ${breakpoints.xl} {
    width: 320px !important;
  }
`;

export const HeaderWarapper = styled.div`
  margin-top: 60px;
  img {
    position: absolute;
    left: -39px;
    width: 130px;
    height: 130px;
  }
  ${breakpoints.xs} {
    margin-top: 10px;
    img {
      top: 347px;
      left: -29px;
      width: 100px;
      height: 100px;
    }
  ${breakpoints.md} {
   margin-top: 30px;
    img {
      top: 300px;
      left: -29px;
      width: 100px;
      height: 100px;
    }
  ${breakpoints.lg} {
     margin-top: 50px;
    img {
      top: 260px;
    }
  ${breakpoints.xl} {
    img {
      top: 260px;
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor || theme.colors.white};
  color: ${theme.colors.white};
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ServiceTitle = styled.h3<{ textColor?: string }>`
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 5px;
  line-height: 28.8px;
  color: ${(props) => props.textColor || theme.colors.dark};
`;

export const ServiceDescription = styled.p<{ textColor?: string }>`
  font-size: 16px;
  margin-top: 20px;
  line-height: 22px;
  font-weight: 400;
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
    margin-right: 45px;
  }
  ${breakpoints.md} {
    margin-top: -40px;
    margin-right: 10px;
  }
  ${breakpoints.lg} {
    margin-top: -45px;
    margin-right: -1px;
  }
`;

export const StyledCardContainer = styled.div`
  margin-top: 50px;
  margin-left: 20px;
  ${breakpoints.xs} {
    margin-top: 20px;
  }
`;

export const SubHeader = styled.p`
  font-size: 26px;
  font-weight: 600;
  color: ${theme.colors.navy};
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  color: ${theme.colors.dark};
  margin-top: 10px;

  ${breakpoints.xs} {
    width: 270px;
    font-size: 16px;
    line-height: 30px;
  }
  ${breakpoints.md} {
    width: 640px;
    font-size: 34px;
    line-height: 48px;
  }
  ${breakpoints.xl} {
    width: 640px;
    font-size: 35px;
    line-height: 48px;
  }
`;

export const Subtitle = styled.p`
  color: ${theme.colors.grey};
  margin-bottom: 35px;
  font-weight: 400;
  margin-top: 30px;
  ${breakpoints.xs} {
    width: 300px;
    font-size: 14px;
    margin-top: 15px;
  }
  ${breakpoints.md} {
    width: 670px;
    font-size: 18px;
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

export const HeaderWarrper = styled.div`
  margin-left: 50px;
  position: relative;
  top: 50px;
  ${breakpoints.xs} {
    top: 20px;
  }
`;

export const Bolder = styled.span`
  font-weight: bold;
  font-size: 18px;
`;



export const ViewMoreLink = styled.a<{ cardBgColor?: string }>`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  text-decoration: underline;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 12px;
  color: ${(props) =>
    props.cardBgColor === theme.colors.green
      ? theme.colors.white
      : theme.colors.grey};

  svg {
    margin-left: 5px;
  }
`;