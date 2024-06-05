"use client";
import BannerComponent from "@/components/banner/Banner";
import DetailComponent from "@/components/details/Details";
import HeaderComponent from "@/layout/header/Header";
import ServiceComponent from "@/components/service/ServicePage";
import EnvironmentComponent from "@/components/enviormentPage/EnvironmentPage";
import CustomerReviewComponent from "@/components/customerReview/CustomerReview";
import { detailsAbout ,detailCapabilitiy,detailsCareer } from '@/config/body';
import FooterComponent from "@/layout/footer/Footer";
import ContactComponent from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <BannerComponent />
      <ServiceComponent/>
      <DetailComponent detail={detailsAbout} />
      <DetailComponent detail={detailCapabilitiy} />
      <CustomerReviewComponent/>
      <EnvironmentComponent/>
      <DetailComponent detail={detailsCareer} />
      <ContactComponent/>
      <FooterComponent />
    </>
  );
}
