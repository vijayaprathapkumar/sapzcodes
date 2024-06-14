import React from "react";

import MediumCard from "@/ui-component/card/Card";
import CustomTitle from "@/ui-component/title/Title";
import { BannerTitleProps, CardItemprops } from "@/types";
import { ServiceItemsContainer } from "../TitleWithCardTemplate/TitleWithCardTemplate.styled";

type TitleWithCardTemplateProps = {
  pageInfo : BannerTitleProps;
  cardList : CardItemprops[]
}
const ExploreCardTemplate = (props: TitleWithCardTemplateProps) => {
  const { pageInfo, cardList } = props;
  const renderServiceItems = () => {
    return cardList?.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <MediumCard cardItems={item} />
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

export default ExploreCardTemplate;