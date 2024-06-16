"use client";
import { ServicesItemsCarrer, CareerTitle } from "@/config/carousal";
import { BannerCarrer } from "@/config/banner";
import BannerComponent from "../banner/Banner";
import { CardWrapper, Card } from "./Carrer.styled";
import CustomTitle from "@/ui-component/title/Title";

const CareerComponents = () => {
  return (
    <>
      <BannerComponent bannerMain={BannerCarrer} />
      <div className="layout-gap">
        <CustomTitle {...CareerTitle} alignMent="start" />

        <CardWrapper>
          {ServicesItemsCarrer.map(
            ({ title, jobLocation, NoOfPosition, Experience }, index) => (
              <Card key={index}>
                <h3>{title}</h3>
                <p>{jobLocation}</p>
                <p>{NoOfPosition}</p>
                <p>{Experience}</p>
              </Card>
            )
          )}
        </CardWrapper>
      </div>
    </>
  );
};

export default CareerComponents;
