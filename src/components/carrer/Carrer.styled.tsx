import { theme } from "@/themes/theme";
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 25px;
  flex-wrap: wrap;
  margin-bottom: 100px;
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
  h3 {
    font-size: 22px;
    font-weight: 600;
    line-height: 28.8px;
    letter-spacing: calc(0.18 * 0.5 / 100);
    color: ${theme.colors.navy};
  }

  p {
    margin: 40px 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: ${theme.colors.lightgrey};
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
