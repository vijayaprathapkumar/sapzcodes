"use client";
import { careerSec } from "@/config/body";
import BannerComponent from "../banner/Banner";
import DetailComponent from "../details/Details";
import { CareerTitle, ServicesItemsCarrer } from "@/config/carousal";
import { BannerCarrer } from "@/config/banner";
import CarouselwithBannerComponent from "../carouselwithBanner/CarouselwithBanner";

const CareerComponents = () => {
  return (
    <>
      <BannerComponent bannerMain={BannerCarrer} />
      <CarouselwithBannerComponent
        bannerTitle={CareerTitle}
        carouselItemData={ServicesItemsCarrer}
      />
      <DetailComponent detail={careerSec} />
    </>
  );
};
export default CareerComponents;
