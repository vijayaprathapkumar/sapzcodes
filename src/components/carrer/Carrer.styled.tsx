import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 25px;
  ${breakpoints.xs} {
    flex-direction: column;
  }
  ${breakpoints.md} {
    flex-direction: row;
  }
  ${breakpoints.xl} {
    margin: 50px 0px 50px 0px;
  }
`;
export const Card = styled.div`
  background: ${theme.colors.white};
  margin: 20px;
  border: 1px solid ${theme.colors.lightnav};
  border-radius: 2px;
  height: 300px;
  width: 319px;
  padding: 26px;
  box-shadow: 0 2px 4px ${theme.colors.shadow};
  cursor: pointer;
  ${breakpoints.md} {
    height: 280px;
    width: 319px;
  }
  ${breakpoints.xl} {
    height: 350px;
    width: 349px;
  }

  h3 {
    font-size: 21px;
    font-weight: 600;
    line-height: 28.8px;
    letter-spacing: calc(0.18 * 0.5 / 100);
    color: ${theme.colors.navy};
  }

  p {
    margin: 37px 0;

    line-height: 22px;
    color: ${theme.colors.lightgrey};
    ${breakpoints.xs} {
      font-weight: 400;
      font-size: 16px;
    }
    ${breakpoints.md} {
      font-weight: 400;
      font-size: 14px;
    }
    ${breakpoints.lg} {
      font-weight: 400;
      font-size: 18px;
    }
    ${breakpoints.xl} {
      
   
      margin: 57px 0;
    }
  }

  &:hover {
    h3,
    p {
      color: ${theme.colors.white};
    }
  }

  &:hover {
    background: ${theme.colors.green};
  }
`;

export const Description = styled.h5`
  color: ${theme.colors.grey};
  font-weight: 600;
  line-height: 48px;
  font-size: 40px;
  letter-spacing: calc(0.18 * 0.5 / 100);
`;
