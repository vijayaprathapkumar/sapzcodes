import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import { FiMenu } from "react-icons/fi";
import { styled } from "styled-components";

interface CustomProps {
  isMobile?: boolean;
}
export const HeaderWraper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  color: #fff;
  z-index: 50;
  width: 100%;
  height: 65px;
  position: fixed;
  top: 0;
  

  ${breakpoints.xs} {
    padding: 0;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.28);
  
  }
  ${breakpoints.md} {
    display: flex;
    width: 100%;
    height: 45px;
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
    left: 18%;
  }
  ${breakpoints.lg} { 
    left: 30%;
  }
  ${breakpoints.xl} { 
    left: 48%;
  }
`;
export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  position: relative;
  &:hover {
    color: #46d200;
  }

  &:active {
    color: #46d200;
  }
  ${breakpoints.xs} {
    bottom: 10px; 
    color: black;
   }
   ${breakpoints.md} {
    bottom: 50px; 
    color: #fff;
   }
   ${breakpoints.xl} { 
    bottom: 40px; 
    color: #fff;
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
    color: white;
    height: 40px;
    width: 150px;
    border-radius: 10px;
    border: 1px solid white;
    padding: 5px;
    
  }
  ${breakpoints.xs} {
    bottom: 15px;
    left: 0;

    .contact-btn {
      height: 20px;
      color: black;
      width: 70px;
      font-size: 8px;
      border-radius: 15px;
      border: 1px solid black;
      padding: 3px;
    }
  }
  ${breakpoints.md} {
    left: 50%;
    bottom: 88px;
  
    .contact-btn {
      background-color: transparent;
      color: white;
      height: 25px;
      font-size: 10px;
      width: 80px;
      border-radius: 10px;
      border: 1px solid white;
      padding: 5px;
    }
  }
  ${breakpoints.lg} { 
    left: 62%;

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
    height: 25px;
  width: 250px;
  }
  ${breakpoints.lg} {
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
    top: 30px;
    right: 0;
    width: 100%;
    background-color: white;
    padding: 1rem;
    height: 127px;
    z-index: 99;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  }
  ${breakpoints.md} {
    display: ${({ isMobile }) => (isMobile ? "flex" : "block")};
    position: absolute;
    left: 250px;
    width: 100%;
    padding: 1rem;
    height: 125px;
    background: none;
    z-index: 100;
  }
`;


