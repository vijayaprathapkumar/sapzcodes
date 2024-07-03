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
  ${breakpoints.xs}{
      font-size:10px;
  }
  ${breakpoints.md}{
      font-size:18px;
  }
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
    font-size: 14px;
    margin-top: 0px;
    line-height: 31.6px;
  }
  ${breakpoints.lg} {
    font-size: 40px;
    margin-top: 30px;
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
    font-size:12px;
  }
  ${breakpoints.sm} {
    width: 650px;
  }
  ${breakpoints.md} {
    width: 630px !important;
    margin-top: 20px;
  }
  ${breakpoints.lg} {
    width: 920px !important;
    font-size:14px;
  }
  ${breakpoints.xl} {
    font-size:16px;
  }
`;