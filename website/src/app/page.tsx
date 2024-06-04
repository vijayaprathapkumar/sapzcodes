"use client";
import BannerComponent from "@/components/banner/Banner";
import DetailComponent from "@/components/details/Details";
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
