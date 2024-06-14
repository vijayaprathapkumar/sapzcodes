"use client";

import BannerComponent from "@/components/banner/Banner";
import DetailComponent from "@/components/details/Details";
import EnvironmentComponent from "@/components/enviormentPage/EnvironmentPage";
import { detailsAbout, detailCapabilitiy, detailsCareer } from "@/config/body";
import ContactComponent from "@/components/contact/Contact";
import { BannerDash } from "@/config/banner";
import CarouselwithBannerComponent from "@/components/carouselwithBanner/CarouselwithBanner";
import { ServicecarouselTitle, ServicesCarouselItems } from "@/config/carousal";

export default function Home() {
  return (
    <>
      <BannerComponent bannerMain={BannerDash} />
      <CarouselwithBannerComponent
        bannerTitle={ServicecarouselTitle}
        carouselItemData={ServicesCarouselItems}
      />
      <DetailComponent detail={detailsAbout} />
      <DetailComponent detail={detailCapabilitiy} />
      {/* <CustomerReviewComponent/> */}
      <EnvironmentComponent />
      <DetailComponent detail={detailsCareer} />
      <ContactComponent />
    </>
  );
}
