"use client";
import BannerComponent from "@/components/banner/Banner";
import DetailComponent from "@/components/details/Details";
import HeaderComponent from "@/layout/header/Header";
import { detailsAbout ,detailCapabilitiy,detailsCareer } from '@/config/body';

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <BannerComponent />
      <DetailComponent detail={detailsAbout} />
      <DetailComponent detail={detailCapabilitiy} />
      <DetailComponent detail={detailsCareer} />
    </>
  );
}
