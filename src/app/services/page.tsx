"use client";

import TitleWithCardTemplate from "@/components/TitleWithCardTemplate/TitleWithCardTemplate";
import { ServicesItemsAll } from "@/config/carousal";

const Services = () => {
  const TitleProps = {
    title: "OUR SERVICE",
    subTitle: "OUR EXPERTISE",
    description:
      "Welcome to Sapzcodes! We are a leading technology solutions provider offering a wide range of services to meet your business needs. Our team of experts specializes in various domains and technologies, ensuring top-notch solutions for your organization. Below are the services provided by Sapzcodes:",
  };

  return (
    <TitleWithCardTemplate pageInfo={TitleProps} cardList={ServicesItemsAll} />
  );
};

export default Services;
