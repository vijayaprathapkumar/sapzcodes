import styled from "styled-components";
import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";

export const Warpper = styled.div<{alignMent:string}>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignMent};
  justify-content: ${(props) => props.alignMent};
  text-align: ${(props) => props.alignMent};
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