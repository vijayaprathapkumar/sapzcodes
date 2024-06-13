"use client";

import { corporateTraining } from "@/config/corporate-training";
import {
  StyledCardContainer,
  ServiceCard,
  ServiceTitle,
  ServiceDescription,
} from "../service/ServicePage.styled";
import { CardSection, ContentSection } from "./CorporateTraining.styled";

const CorporateTraining = () => {
  const ServiceItemElements = corporateTraining.map((item, index) => (
    <StyledCardContainer key={index}>
      <ServiceCard cardBgColor={item.cardBgColor}>
        <ServiceTitle textColor={item.titleColor}>{item.title}</ServiceTitle>
        <ServiceDescription textColor={item.descriptionColor}>
          {item.description}
        </ServiceDescription>
      </ServiceCard>
    </StyledCardContainer>
  ));

  return (
    <>
      <ContentSection>
        <h1>Corporate Training Programs</h1>
        <p className="descrip">
          Overview of SAPZCODES Corporate Training Programs on Various SAP
          Modules
        </p>
      </ContentSection>
      <CardSection>{ServiceItemElements}</CardSection>
    </>
  );
};

export default CorporateTraining;
