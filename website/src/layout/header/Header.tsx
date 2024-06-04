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
import { useState } from "react";

const HeaderComponent = () => {
  const [isMobile, setMobile] = useState(false);
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
  
  return (
    <HeaderWraper>
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
