"use client";

import BannerComponent from "@/components/banner/Banner";
import DetailComponent from "@/components/details/Details";
import HeaderComponent from "@/layout/header/Header";
import { reverse } from "dns";

export default function Home() {
  const Details = {
     reverse:[
      false,
      true,
      false],
     imgSrc:[
      "/images/About.png",
      "/images/Girl.png",
      "/images/Carrier.png"
    ]
  }
  return (
    <>
      <HeaderComponent />
      <BannerComponent />
      <DetailComponent index={0} reverse={Details.reverse[0]} imgSrc = {Details.imgSrc[0]} />
      <DetailComponent index={1} reverse={Details.reverse[1]} imgSrc = {Details.imgSrc[1]} />
      <DetailComponent index={2} reverse={Details.reverse[2]} imgSrc = {Details.imgSrc[2]} />
    </>
  );
}
