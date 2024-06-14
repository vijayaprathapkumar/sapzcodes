import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import { styled } from "styled-components";

export const StyledCardContainer = styled.div`
  border-radius: 1rem;
`;

export const CardWrapper = styled.div<{ cardBgColor?: string }>`
  background-color: ${(props) => props.cardBgColor || theme.colors.white};
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap:15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 0.5px solid ${theme.colors.lightnav};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const CardIcon = styled.div<{ bgColor?: string }>`
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

export const CardTitle = styled.h3<{ textColor?: string }>`
  font-size: 19px;
  font-weight: 600;
  line-height: 28.8px;
  letter-spacing: calc(0.18 * 0.5 / 100);
  color: ${(props) => props.textColor || theme.colors.dark};
`;

export const CardDescription = styled.p<{ textColor?: string }>`
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  min-height: 140px;
  max-height: 140px;
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  transition: all 0.5s ease-in-out;
  color: ${(props) => props.textColor || theme.colors.lightgrey};
  ${breakpoints.lg} {
    font-size: 17px;
  }
  ${breakpoints.xl} {
    font-size: 15px;
    color: ${(props) => props.textColor || theme.colors.lightgrey};
  }
`;

export const ViewMoreLink = styled.a<{ cardBgColor?: string }>`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  text-decoration: underline;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.cardBgColor === theme.colors.green
      ? theme.colors.white
      : theme.colors.grey};
`;
