import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import Link from "next/link";
import { styled } from "styled-components";

export const StyledCardContainer = styled.div`
  border-radius: 1rem;
  height: 430px;
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 42px;
  border-radius: 50%;
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};
  font-size: 28px;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h3`
  font-size: 19px;
  font-weight: 600;
  line-height: 28.8px;
  letter-spacing: calc(0.18 * 0.5 / 100);
  color: ${theme.colors.navy};
`;

export const CardDescription = styled.p<{ isExpanded: boolean }>`
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ isExpanded }) => (isExpanded ? "none" : 7)};
  -webkit-box-orient: vertical;
  max-height: ${({ isExpanded }) => (isExpanded ? "none" : "154px")};
  color: ${theme.colors.lightgrey};
  ${breakpoints.lg} {
    font-size: 17px;
  }
  ${breakpoints.xl} {
    font-size: 15px;
    color: ${theme.colors.lightgrey};
  }
`;

export const ViewMoreLink = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  text-decoration: underline;
  display: flex;
  align-items: center;
  color: ${theme.colors.grey};
`;

export const ButtonStyled = styled.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  color: ${theme.colors.grey};
  border: none;
`;
export const CardWrapper = styled.div<{ isExpanded: boolean }>`
  background-color: ${theme.colors.white};
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 0.5px solid ${theme.colors.lightnav};
  transition: transform 0.3s ease, box-shadow 0.3s ease, height 0.3s ease;
  cursor: pointer;
  height: ${({ isExpanded }) => (isExpanded ? "auto" : "370px")};
  &:hover {
    transform: scale(1.05);
    background-color: ${theme.colors.green};
  }
  &:hover ${CardTitle} {
    color: ${theme.colors.white};
  }
  &:hover ${CardDescription} {
    color: ${theme.colors.white};
  }
  &:hover ${ViewMoreLink} {
    color: ${theme.colors.white};
  }

  &:hover ${CardIcon} {
    background-color: ${theme.colors.white};
    color: ${theme.colors.dark};
  }
  &:hover ${ButtonStyled} {
    text-decoration: underline;
    color: ${theme.colors.white};
  }
`;
