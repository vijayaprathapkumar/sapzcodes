"use client";

import { Menus } from "@/config/header";
import {
  Contact,
  DropdownMenu,
  HeaderWraper,
  Link,
  LinkContainer,
  LogoImage,
  LogoSection,
  MenuIcon,
  MenuWrapper,
  NavLink,
} from "./Header.styled";
import { useEffect, useState } from "react";

const HeaderComponent = () => {
  const [isMobile, setMobile] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const toggleBar = () => {
    setMobile(!isMobile);
  };

  const renderMenus = () => {
    return Menus?.map((menu, index) => {
      return (
        <NavLink key={index}>
          <Link href={menu.path}>{menu.name}</Link>
        </NavLink>
      );
    });
  };
  
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWraper scrollDirection={scrollDirection}>
      <LogoSection>
        <LogoImage src="images/sapzcodes.png" alt="Sapzcodes" />
      </LogoSection>
      <LinkContainer>
        <DropdownMenu isMobile={isMobile}>
          <MenuWrapper isMobile={isMobile}>{renderMenus()}</MenuWrapper>
          <Contact>
            <button className="contact-btn">CONTACT US</button>
          </Contact>
        </DropdownMenu>
      </LinkContainer>
      <MenuIcon onClick={toggleBar} />
    </HeaderWraper>
  );
};

export default HeaderComponent;
