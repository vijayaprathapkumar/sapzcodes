import React, { useState } from "react";

import { ServiceItemsContainer } from "./TitleWithCardTemplate.styled";
import MediumCard from "@/ui-component/card/Card";
import CustomTitle from "@/ui-component/title/Title";
import { BannerTitleProps, CardItemprops } from "@/types";
import { IoIosArrowForward } from "react-icons/io";

type TitleWithCardTemplateProps = {
  pageInfo: BannerTitleProps;
  cardList: CardItemprops[];
};
const TitleWithCardTemplate = (props: TitleWithCardTemplateProps) => {
  const { pageInfo, cardList } = props;

  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

  const handleToggleExpand = (index: number) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  
  const renderServiceItems = () => {
    return cardList?.map((item, index) => {
      const isExpanded = expandedCardIndex === index;
      const viewMore = {
        text: isExpanded ? "Show Less" : "See More",
        textIcon: <IoIosArrowForward />,
        action: () => handleToggleExpand(index),
      };

      const cardProps = {
        ...item,
        isExpanded,
        viewMore,
      };

      return (
        <React.Fragment key={index}>
          <MediumCard cardItems={cardProps} />
        </React.Fragment>
      );
    });
  };

  return (
    <div className="conatner-gap">
      <CustomTitle {...pageInfo} />
      <ServiceItemsContainer className="layout-gap">
        {renderServiceItems()}
      </ServiceItemsContainer>
    </div>
  );
};

export default TitleWithCardTemplate;
