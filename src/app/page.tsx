"use client";

import BannerComponent from "@/components/banner/Banner";
import DetailComponent from "@/components/details/Details";
import EnvironmentComponent from "@/components/enviormentPage/EnvironmentPage";
import { detailsAbout, detailCapabilitiy, detailsCareer } from "@/config/body";
import ContactComponent from "@/components/contact/Contact";
import { BannerDash } from "@/config/banner";
import CarouselwithBannerComponent from "@/components/carouselwithBanner/CarouselwithBanner";
import { ServicecarouselTitle, ServicesItemsAll } from "@/config/carousal";

export default function Home() {
  return (
    <>
      <div id="Home">
        <BannerComponent bannerMain={BannerDash} />
      </div>

      <CarouselwithBannerComponent
        bannerTitle={ServicecarouselTitle}
        carouselItemData={ServicesItemsAll}
      />
      <div id="About Us">
        <DetailComponent detail={detailsAbout} />
      </div>

      <DetailComponent detail={detailCapabilitiy} />
      {/* <CustomerReviewComponent/> */}
      <EnvironmentComponent />
      <div id="Careers">
        <DetailComponent detail={detailsCareer} />
      </div>

      <div id="Contact us">
        <ContactComponent />
      </div>
    </>
  );
}
