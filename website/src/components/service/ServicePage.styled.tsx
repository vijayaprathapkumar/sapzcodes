import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  height: 775.43px;
  background-color: ${theme.colors.white};
  background: linear-gradient(
    90deg,
    ${theme.colors.white} 998px,
    ${theme.colors.lightgreen} 50%
  );

  ${breakpoints.lg} {
    background-color: ${theme.colors.white};
    background: linear-gradient(
      90deg,
      ${theme.colors.white} 758px,
      #f0f7ec 50%
    );
  }
  ${breakpoints.xl} {
    background-color: ${theme.colors.white};
    background: linear-gradient(
      90deg,
      ${theme.colors.white} 998px,
      #f0f7ec 50%
    );
  }
`;
export const Header = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.colors.green};
`;

export const ServiceCard = styled.div<{ cardBgColor?: string }>`
  background-color: ${(props) => props.cardBgColor || "white"};
  padding: 10px;
  margin: 0 20px 0 20px;
  width: 300px !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 300px;

  ${breakpoints.lg} {
    width: 450px !important;
  }
  ${breakpoints.xl} {
    width: 300px !important;
  }
`;

export const ServiceIcon = styled.div<{ bgColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor || "white"};
  color: ${theme.colors.white};
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ServiceTitle = styled.h3<{ textColor?: string }>`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${(props) => props.textColor || "black"};
`;

export const ServiceDescription = styled.p<{ textColor?: string }>`
  font-size: 14px;
  margin-top: 20px;
  line-height: 1.5;
  color: ${(props) => props.textColor || "black"};
  ${breakpoints.lg} {
    font-size: 17px;
    margin-top: 20px;
    line-height: 1.5;
  }
  ${breakpoints.xl} {
    font-size: 15px;
    margin-top: 20px;
    line-height: 1.5;
  }
`;

export const ArrowButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-right: 120px;
`;

export const StyledCardContainer = styled.div<{
  gap?: string;
  margin?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ margin }) => margin || "20px"};
  gap: ${({ gap }) => gap || "100px"};
`;

export const SubHeader = styled.p`
  font-size: 26px;
  font-weight: 600;
  color: ${theme.colors.navy};
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #000;
  margin-bottom: 16px;
  width: 640px;
  ${breakpoints.xs} {
    width: 250px;
    font-size: 17px;
  }
  ${breakpoints.md} {
    width: 640px;
    font-size: 34px;
  }
  ${breakpoints.lg} {
    width: 640px;
    font-size: 34px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 32px;
  width: 900px;
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
    font-size: 14px;
  }
  ${breakpoints.xl} {
    width: 840px;
    font-size: 18px;
  }
`;

export const HeaderWarrper = styled.div`
  margin-left: 50px;
  position: relative;
  top: 50px;
  ${breakpoints.xs} {
    margin-left: 50px;
    position: relative;
    top: 20px;
  }
`;
