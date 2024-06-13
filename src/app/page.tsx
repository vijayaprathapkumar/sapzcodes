"use client";

import BannerComponent from "@/components/banner/Banner";
import DetailComponent from "@/components/details/Details";
import EnvironmentComponent from "@/components/enviormentPage/EnvironmentPage";
import { detailsAbout ,detailCapabilitiy,detailsCareer } from '@/config/body';
import ContactComponent from "@/components/contact/Contact";
import {  ServicesItems } from "@/config/carousal";
import { BannerDash } from "@/config/banner";
import ServiceComponent from "@/components/serviceComponent/serviceCarousel";

export default function Home() {
  return (
    <>
      <BannerComponent bannerMain={BannerDash}/>
      <ServiceComponent />
      <DetailComponent detail={detailsAbout} />
      <DetailComponent detail={detailCapabilitiy} />
      {/* <CustomerReviewComponent/> */}
      <EnvironmentComponent/>
      <DetailComponent detail={detailsCareer} />
      <ContactComponent/>
    </>
  );
}
  