"use client";
import { ReactNode } from "react";
import HeaderComponent from "./header/Header";
import FooterComponent from "./footer/Footer";

export type LayoutProps = {
    children: ReactNode;
  };
const HomePageLayout = ({ children }: LayoutProps) => {
    const scrollToSection = (sectionId: any) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offsetTop = section.offsetTop - 110;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      };

    return(
        <>
        <HeaderComponent scrollToSection={scrollToSection}/>
        {children}
        <FooterComponent scrollToSection={scrollToSection}/>
        </>
    );

}
export default HomePageLayout;