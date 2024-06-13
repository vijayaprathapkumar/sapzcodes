import React from "react";
import { ServicesItemsAll } from "@/config/carousal";
import { ServiceItemsContainer } from "./Servicepage.styled";
import MediumCard from "@/ui-component/card/Card";
import CustomTitle from "@/ui-component/title/Title";

const Servicepage = () => {
  const renderServiceItems = () => {
    return ServicesItemsAll.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <MediumCard cardItems={item} />
        </React.Fragment>
      );
    });
  };

  const TitleProps = {
    title: "OUR SERVICE",
    subTitle: "OUR EXPERTISE",
    description:
      "Welcome to Sapzcodes! We are a leading technology solutions provider offering a wide range of services to meet your business needs. Our team of experts specializes in various domains and technologies, ensuring top-notch solutions for your organization. Below are the services provided by Sapzcodes:",
  };

  return (
    <div className="conatner-gap">
      <CustomTitle {...TitleProps} />
      <ServiceItemsContainer className="layout-gap">
        {renderServiceItems()}
      </ServiceItemsContainer>
    </div>
  );
};

export default Servicepage;
