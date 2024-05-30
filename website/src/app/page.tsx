"use client";

import BannerComponent from "@/components/banner/Banner";
import CustomerReview from "@/components/customerReview/customerReview";
import ImageSlider from "@/components/enviormentPage/EnvironmentPage";

import ServicePage from "@/components/service/ServicePage";
import HeaderComponent from "@/layout/header/Header";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <BannerComponent />
      <ServicePage />
      <CustomerReview />
      <ImageSlider />
    </>
  );
}
