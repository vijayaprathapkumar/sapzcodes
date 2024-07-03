import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  background-color: ${theme.colors.white};
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  background: ${theme.colors.white};
`;

export const ArrowButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: right;
  margin-bottom: 20px;
  ${breakpoints.xs}{
    margin-top:70px;
  }
  ${breakpoints.md}{
    margin-top:0px;
  }
`;
