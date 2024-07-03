import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import styled from "styled-components";

export const ContactWrapper = styled.div`
align-items: center;
justify-items: center;
margin-bottom:70px;
${breakpoints.xs} { 
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  top: 20px;
}
${breakpoints.lg} { 
 grid-template-columns: 500px 1fr;
  top: 0;
}
`;
export const AddressContent = styled.div`
  .conct {
    color: ${theme.colors.green};
    font-size: 15px;
  }
  .get-cont {
    line-height: 2;
  }
  .paragraph {
    font-size: 14px;
    margin-top: 10px;
    line-height: 1.7;
  }
  hr {
    margin-top: 25px;
  }
`;

export const LocationSection = styled.div`
  margin-top: 30px;
  .part-one {
    display: flex;
    margin-top: 15px;
    gap: 10px;
  }
  .map {
    height: 20px;
    width: 20px;
  }
`;
export const ContactSection = styled.div`
  margin-top: 30px;
  .envelope-part {
    margin-top: 15px;
  }
  .envelope-part a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  .envelope-part p {
    margin-left: 10px;
  }
  .envelope {
    height: 20px;
    width: 20px;
  }
  .part-sec {
    display: flex;
    margin-top: 17px;
    gap: 10px;
    align-items: center;
  }
  .part-sec a {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-right: 20px;
  }

  .whatsapp-icon {
    color: #a9a9a9;
    font-size: 20px;
  }
  .phone {
    height: 20px;
    width: 20px;
  }
`;

export const ImageSection = styled.div`
  ${breakpoints.xs} {
    .contact-image {
       height: 450px;
      width: 350px;
    }
  }
    ${breakpoints.md} { 
     .contact-image {
      height: 550px;
      width: 450px;
    }
    }
`;
