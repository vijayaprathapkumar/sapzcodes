"use client";
import { careerSec} from "@/config/body";
import BannerComponent from "../banner/Banner";
import DetailComponent from "../details/Details";
import ServiceComponent from "../service/ServicePage";
import { ServiceCareer, ServicesItemsCarrer } from "@/config/carousal";
import { BannerCarrer } from "@/config/banner";



const CareerComponents = () => {
 
    return(
        <><BannerComponent bannerMain={BannerCarrer}/>
         <ServiceComponent serviceMain={ServiceCareer} serviceItems={ServicesItemsCarrer}/>
        <DetailComponent detail={careerSec} />
        </>
    );
};
export default CareerComponents;