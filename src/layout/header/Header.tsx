"use client";

import { Menus } from "@/config/header";
import {
  Contact,
  DropdownMenu,
  HeaderWraper,
  LinkContainer,
  LinkStyled,
  LogoImage,
  LogoSection,
  MenuIcon,
  MenuWrapper,
  NavLink,
} from "./Header.styled";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const HeaderComponent = ({ scrollToSection }: any) => {
  const pathName = usePathname();
  const [isMobile, setMobile] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [hasBgColor, setHasBgColor] = useState(false);

  const toggleBar = () => {
    setMobile(!isMobile);
  };

  const renderMenus = () => {
    return Menus?.map((menu, index) => (
      <NavLink key={index}>
        <LinkStyled href={menu.path}>{menu.name}</LinkStyled>
      </NavLink>
    ));
  };

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (pathName === "/" || pathName === "/careers") {
        if (currentScrollY > lastScrollY) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
        if (currentScrollY > 0) {
          setHasBgColor(true);
        } else {
          setHasBgColor(false);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathName]);

  return (
    <HeaderWraper pathName={pathName} hasBgColor={hasBgColor}>
      <LogoSection>
        <LogoImage src="images/sapzcodes.png" alt="Sapzcodes" />
      </LogoSection>
      <LinkContainer>
        <DropdownMenu isMobile={isMobile}>
          <MenuWrapper isMobile={isMobile}>{renderMenus()}</MenuWrapper>
          <Contact onClick={() => scrollToSection("Contact us")}>
            <button className="contact-btn">CONTACT US</button>
          </Contact>
        </DropdownMenu>
      </LinkContainer>
      <MenuIcon onClick={toggleBar} />
    </HeaderWraper>
  );
};
export default HeaderComponent;
