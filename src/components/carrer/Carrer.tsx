"use client";
import { careerSec} from "@/config/body";
import BannerComponent from "../banner/Banner";
import DetailComponent from "../details/Details";
import { ServiceCareer, ServicesItemsCarrer } from "@/config/carousal";
import { BannerCarrer } from "@/config/banner";
import ServiceComponent from "../serviceComponent/serviceCarousel";



const CareerComponents = () => {
 
    return(
        <><BannerComponent bannerMain={BannerCarrer}/>
         <ServiceComponent serviceMain={ServiceCareer} serviceItems={ServicesItemsCarrer}/>
        <DetailComponent detail={careerSec} />
        </>
    );
};
export default CareerComponents;