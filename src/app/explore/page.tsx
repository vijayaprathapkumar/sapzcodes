'use client';

import ExploreCardTemplate from "@/components/exploreTemplate/ExploreCardTemplate";
import { ExploreService } from "@/config/explore-template";

const Explore = () => {
  const ExploreProps = {
    title: "Services Overview",
    subTitle: "Advanced Technical Services",
    description:
      " Specialized technical services provided by SAPZCODES",
  };
  return (
    <ExploreCardTemplate pageInfo={ExploreProps} cardList={ExploreService} />
  );
};

export default Explore;