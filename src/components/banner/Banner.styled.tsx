import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import { styled } from "styled-components";

interface MainContentProps {
  marginTop: string;
  width: string;
}
export const SectionWrapper = styled.section`
  width: 100%;
  position: relative;
  .banner-image {
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

export const BackgroundGradient = styled.div`
  background-color: #212121;
  opacity: 0.6;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 0;
   ${breakpoints.xs} {
    height: 96%;
  }
  ${breakpoints.md} {
    height: 98%;
  }
  ${breakpoints.lg} {
    height: 98.4%;
  }
   ${breakpoints.xl} {
    height: 99%;
  }

`;

export const ContentWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  gap:5px;
  height:100%;
  top: 0;
  left: 0;
  align-items: flex-start;
  justify-content: center;
 ${breakpoints.xs} {
  top: 12px;
  }
  ${breakpoints.md} {
  top: 26px;
    gap: 30px;
  }
  ${breakpoints.lg} { 
   top: 17px;
  }
  ${breakpoints.xl} { 
    top: 0;
   }
`;

export const MainContent = styled.div<MainContentProps>`
  width: ${(props) => props.width};
  font-weight: 600;
  font-size: 40px;
  color: ${theme.colors.white};
  ${breakpoints.xs} {
    top: 38px;
    width: 180px;
    font-size: 10px;
  }
  ${breakpoints.md} {
    width: 300px;
    font-size: 18px;
  }
  ${breakpoints.lg} {
    width: 390px;
    font-size: 21px;
  }
  ${breakpoints.xl} {
    width: ${(props) => props.width};
    font-size: 35px;
  }
`;

export const SubContent = styled.div`
  width: 700px;
  line-height: 1.8;
  color: ${theme.colors.white};
  ${breakpoints.xs} {
    width: 200px;
    font-size: 5px;
  }
  ${breakpoints.md} {
    width: 320px;
    font-size: 7px;
  }
  ${breakpoints.lg} {
    width: 460px;
    font-size: 10px;
  }
  ${breakpoints.xl} {
    width: 610px;
    font-size: 14px;
  }
`;

export const ButtonBox = styled.button`
  display: flex;
  align-items: center;
  height: 20px;
  font-size: 8px;
  background-color: ${theme.colors.green};
  color: ${theme.colors.white};
  border-radius: 5px;
  padding: 5px 10px;
  outline:none;
  border:none;
  ${breakpoints.md} {
    height: 40px;
    font-size: 14px;
    padding: 5px 20px;
  }
`;

export const ArrowImage = styled.img`
  height: 5px;
  margin-left: 10px;
  ${breakpoints.md} {
    height: 9px;
  }
`;
