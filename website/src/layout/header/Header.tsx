import { Menus } from "@/config/header";
import { HeaderWraper, MenuWrapper } from "./Header.styled";

const HeaderComponent = () => {
  const renderMenus = () => {
    return Menus?.map((menu, index) => {
      return (
        <div key={index}>
          <a href={menu.path}>{menu.name}</a>
        </div>
      );
    });
  };

  return (
    <HeaderWraper>
      <div>
        <img src="" />
      </div>
      <MenuWrapper>{renderMenus()}</MenuWrapper>
    </HeaderWraper>
  );
};

export default HeaderComponent;
