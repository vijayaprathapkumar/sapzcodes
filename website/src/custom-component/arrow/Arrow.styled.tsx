import { theme } from "@/themes/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ArrowButton = styled.button<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor || theme.colors.dark};
  color: ${theme.colors.white};
  border: none;
  padding: 3px 5px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 10px;
`;
