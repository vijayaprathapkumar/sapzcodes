import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { styled } from "styled-components";

interface CustomProps {
  isMobile?: boolean;
  scrollDirection?: "up" | "down";
  hasBgColor?: boolean;
}
export const HeaderWraper = styled.div<CustomProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${theme.colors.white};
  z-index: 50;
  width: 100%;
  height: 65px;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;

  ${({ scrollDirection }) =>
    scrollDirection === "down" &&
    `
    top: -65px;
  `}

  ${breakpoints.xs} {
    padding: 0;
    height: 24px;
    background-color: ${({ hasBgColor }) =>
      hasBgColor ? theme.colors.black : "rgba(0, 0, 0, 0.28)"};
  }

  ${breakpoints.md} {
    display: flex;
    width: 100%;
    height: 40px;
  }
  ${breakpoints.lg} {
    height: 47px;
  }
  ${breakpoints.xl} {
    height: 65px;
  }
`;
export const NavLink = styled.div`
  position: relative;
  ${breakpoints.xs} {
    right: 0;
    left: 0;
  }
  ${breakpoints.md} {
    left: 0%;
  }
  ${breakpoints.lg} {
    left: 13%;
  }
  ${breakpoints.xl} {
    left: 34%;
  }
`;

export const LinkStyled = styled(Link)<{ href: string }>`
  color: ${theme.colors.white};
  text-decoration: none;
  position: relative;
  transition: color 0.3s, text-decoration 0.3s;
  &:hover {
    color: ${theme.colors.green};
    text-decoration: underline;
  }

  &:active {
    color: #46d200;
  }
  ${breakpoints.xs} {
    bottom: 10px;
    color: black;
  }
  ${breakpoints.md} {
    bottom: 44px;
    color: ${theme.colors.white};
  }
  ${breakpoints.lg} {
    bottom: 42px;
    color: ${theme.colors.white};
  }
  ${breakpoints.xl} {
    bottom: 36px;
    color: ${theme.colors.white};
  }
`;
export const MenuWrapper = styled.div<CustomProps>`
  gap: 3rem;

  ${breakpoints.xs} {
    flex-direction: column;
    gap: 5px;
    position: relative;
    font-size: 10px;
    display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
    background-color: transparent;
    padding: 1rem;
    width: 100%;
  }
  ${breakpoints.md} {
    gap: 2rem;
    flex-direction: row;
    font-size: 12px;
    display: flex;
  }
  ${breakpoints.lg} {
    gap: 3rem;
    font-size: 15px;
  }
  ${breakpoints.xl} {
    font-size: 17px;
  }
`;
export const Contact = styled.div`
  position: relative;
  left: 4%;

  .contact-btn {
    background-color: transparent;
    color: ${theme.colors.white};
    height: 40px;
    width: 150px;
    border-radius: 5px;
    border: 1px solid white;
    padding: 5px;
    cursor: pointer;
  }
  ${breakpoints.xs} {
    bottom: 15px;
    left: 0;

    .contact-btn {
      height: 20px;
      color: black;
      width: 70px;
      font-size: 8px;
      border-radius: 5px;
      border: 1px solid black;
      padding: 3px;
    }
  }
  ${breakpoints.md} {
    left: 50%;
    bottom: 83px;

    .contact-btn {
      background-color: transparent;
      color: ${theme.colors.white};
      height: 25px;
      font-size: 10px;
      width: 80px;
      border-radius: 5px;
      border: 1px solid white;
      padding: 5px;
    }
  }
  ${breakpoints.lg} {
    left: 63%;

    .contact-btn {
      height: 26px;
      font-size: 12px;
      width: 90px;
    }
  }
  ${breakpoints.xl} {
    left: 71%;

    .contact-btn {
      height: 40px;
      font-size: 13px;
      width: 110px;
      margin-top: 0px;
    }
  }
`;
export const LogoSection = styled.div`
  position: relative;
  right: 3%;
  ${breakpoints.xs} {
    left: 30px;
  }
  ${breakpoints.md} {
    right: 3%;
  }
  ${breakpoints.lg} {
    right: 2%;
  }
  ${breakpoints.xl} {
    left: 5%;
  }
`;
export const LogoImage = styled.img`
  ${breakpoints.xs} {
    height: 10px;
    width: 100px;
  }
  ${breakpoints.md} {
    height: 20px;
    width: 200px;
  }
  ${breakpoints.lg} {
    height: 19px;
    width: 200px;
  }
  ${breakpoints.xl} {
    height: 29px;
    width: 275px;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  ${breakpoints.xs} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  ${breakpoints.md} {
    flex-direction: row;
    align-items: center;
  }
`;
export const MenuIcon = styled(FiMenu)`
  ${breakpoints.xs} {
    display: block;
    position: relative;
    right: 8%;
  }
  ${breakpoints.md} {
    display: none;
  }
`;
export const DropdownMenu = styled.div<CustomProps>`
  ${breakpoints.xs} {
    display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 25px;
    right: 0;
    width: 100%;
    background-color: ${theme.colors.white};
    padding: 1rem;
    height: 133px;
    z-index: 99;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0);
  }
  ${breakpoints.md} {
    display: ${({ isMobile }) => (isMobile ? "flex" : "block")};
    position: absolute;
    left: 250px;
    width: 100%;
    padding: 1rem;
    height: 125px;
    background: none;
    box-shadow: none;
    z-index: 100;
  }
`;
