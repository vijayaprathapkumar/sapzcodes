import { Menus } from "@/config/header";
import { Contact,DropdownMenu,HeaderWraper, Link, LinkContainer, LogoImage, MenuIcon, MenuWrapper, NavLink, NavSection } from "./Header.styled";
import { useState } from "react";


const HeaderComponent = () => {
  const [isClick, setClick] = useState(false);
  const toggleBar = () => {
    setClick(!isClick);
  };

  const renderMenus = () => {
    return Menus?.map((menu, index) => {
      return (
        <>
        <NavLink key={index}>
          <Link href={menu.path}>{menu.name}</Link>
        </NavLink>
          </>
      );
    });
  };
  //images/sapzcodes.png
  return (
    <HeaderWraper>
      <NavSection>
        <LogoImage src="images/sapzcodes.png" alt="Sapzcodes" /> 
      </NavSection>
      <LinkContainer>
      <DropdownMenu isClick={isClick}>
      <MenuWrapper isClick={isClick}>
      {renderMenus()}
      </MenuWrapper>
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
