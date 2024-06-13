"use client";

import { corporateTraining } from "@/config/corporate-training";
import { ServiceItemsContainer } from "./CorporateTraining.styled";
import CustomTitle from "@/ui-component/title/Title";
import MediumCard from "@/ui-component/card/Card";
import React from "react";

const CorporateTraining = () => {
  const renderServiceItems = () => {
    return corporateTraining.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <MediumCard cardItems={item} />
        </React.Fragment>
      );
    });
  };

  const TitleProps = {
    title: "Corporate Training Programs",
    subTitle: "OUR EXPERTISE",
    description:
      " Overview of SAPZCODES Corporate Training Programs on Various SAP Modules",
  };

  return (
    <>
      {/* <ContentSection>
        <h1>Corporate Training Programs</h1>
        <p className="descrip">
          Overview of SAPZCODES Corporate Training Programs on Various SAP
          Modules
        </p>
      </ContentSection>
      <CardSection>{ServiceItemElements}</CardSection> */}
      <div className="conatner-gap">
        <CustomTitle {...TitleProps} />
        <ServiceItemsContainer className="layout-gap">
          {renderServiceItems()}
        </ServiceItemsContainer>
      </div>
    </>
  );
};

export default CorporateTraining;
