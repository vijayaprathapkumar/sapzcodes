'use client';

import TitleWithCardTemplate from "@/components/TitleWithCardTemplate/TitleWithCardTemplate";
import { corporateTraining } from "@/config/corporate-training";

const Corporate = () => {
  const TitleProps = {
    title: "Corporate Training Programs",
    subTitle: "OUR EXPERTISE",
    description:
      " Overview of SAPZCODES Corporate Training Programs on Various SAP Modules",
  };
  return (
    <TitleWithCardTemplate pageInfo={TitleProps} cardList={corporateTraining} />
  );
};

export default Corporate;
