"use client";

import BannerComponent from "@/components/banner/Banner";
import HeaderComponent from "@/layout/header/Header";
import ServiceComponent from "@/components/service/ServicePage";
import EnvironmentComponent from "@/components/enviormentPage/EnvironmentPage";
import CustomerReviewComponent from "@/components/customerReview/CustomerReview";


export default function Home() {
  return (
    <>
      <HeaderComponent />
      <BannerComponent />
      <ServiceComponent/>
      <CustomerReviewComponent/>
      <EnvironmentComponent/>
    </>
  );
}
