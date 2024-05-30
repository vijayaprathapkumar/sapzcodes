import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import { FiMenu } from "react-icons/fi";
import { styled } from "styled-components";

interface CustomProps {
  isClick?: boolean;
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
    position: fixed;
    top: 0;
    
  }
  ${breakpoints.md} {
    display: flex;
    width: 100%;
    height: 45px;
    position: fixed;
  }
  ${breakpoints.lg} {
    height: 45px;
  }
  ${breakpoints.xl} {
    height: 65px;
  }
`;
export const NavLink = styled.div`
  position: relative;
  // left: 100%;
  ${breakpoints.xs} {
    position: relative;
    right: 0;
    left: 0;
  }
  ${breakpoints.md} {
    position: relative;
    left: 18%;
  }
  ${breakpoints.lg} { 
    position: relative;
    left: 30%;
  }
  ${breakpoints.xl} { 
    position: relative;
    left: 48%;
  }
`;
export const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #46d200;
  }

  &:active {
    color: #46d200;
  }
  ${breakpoints.xs} {
    position: relative;
    bottom: 10px; 
   }
   ${breakpoints.md} {
    position: relative;
    bottom: 50px; 
   }
   ${breakpoints.xl} { 
    position: relative;
    bottom: 40px; 
   }

`;
export const MenuWrapper = styled.div<CustomProps>`
  display: flex;
  gap: 3rem;
  
  ${breakpoints.xs} {
    flex-direction: column;
    gap: 5px;
    position: relative;
    font-size: 10px;
    display: ${({ isClick }) => (isClick ? "flex" : "none")};
    background-color: transparent;
    padding: 1rem;
    width: 100%;
  }
  ${breakpoints.md} {
    gap: 2rem;
    flex-direction: row;
    display: flex;
    font-size: 12px;
  }
  ${breakpoints.lg} { 
    gap: 3rem;
    flex-direction: row;
    display: flex;
    font-size: 15px;
  }
  ${breakpoints.xl} { 
    gap: 3rem;
    flex-direction: row;
    display: flex;
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
    padding: 5px;
    border: 1px solid white;
  }
  ${breakpoints.xs} {
    position: relative;
    bottom: 15px;
    left: 0;

    .contact-btn {
      height: 20px;
      width: 80px;
      font-size: 8px;
      border-radius: 15px;
      padding: 3px;
      border: 1px solid white;
    }
  }
  ${breakpoints.md} {
    position: relative;
    left: 50%;
    bottom: 88px;
  
    .contact-btn {
      background-color: transparent;
      color: white;
      height: 25px;
      font-size: 10px;
      width: 80px;
      border-radius: 10px;
      padding: 5px;
      border: 1px solid white;
    }
  }
  ${breakpoints.lg} { 
    position: relative;
    left: 62%;

    .contact-btn {
      height: 26px;
      font-size: 12px;
      width: 90px;
      border-radius: 10px;
      padding: 5px;
      border: 1px solid white;
    }
  }
  ${breakpoints.xl} { 
    position: relative;
    left: 71%;

    .contact-btn {
      height: 40px;
      font-size: 13px;
      width: 110px;
      margin-top: 0px;
      border-radius: 10px;
      padding: 5px;
      border: 1px solid white;
    }
  }
`;
export const NavSection = styled.div`
  position: relative;
  right: 3%;
  ${breakpoints.xs} {
    position: relative;
    left: 30px;
  }
  ${breakpoints.md} {
    position: relative;
   right: 3%;
  }
  ${breakpoints.lg} {
    position: relative;
    right: 2%;
  }
  ${breakpoints.xl} {
    position: relative;
    left: 5%;
  }
 
`;
export const LogoImage = styled.img`
  height: 29px;
  width: 275px;
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


  ${breakpoints.xs} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  ${breakpoints.md} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
export const MenuIcon = styled(FiMenu)`
  display: none;

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
    display: ${({ isClick }) => (isClick ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 30px;
    left: 250px;
    width: 100%;
    background-color: transparent;
    padding: 1rem;
    height: 125px;
    z-index: 100;
  }
  ${breakpoints.md} {
    display: ${({ isClick }) => (isClick ? "flex" : "block")};
    position: absolute;
    left: 250px;
    width: 100%;
    padding: 1rem;
    height: 125px;
    z-index: 100;
  }
`;


