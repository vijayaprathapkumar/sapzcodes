import { theme } from "@/themes/theme";
import styled from "styled-components";

export const ContactWrapper = styled.div`
display: flex;
justify-content: center;
`;
export const AddressContent = styled.div`
line-height: 2;
 width: 400px;
 position: relative;
 right: 10%;

.conct{
    color: ${theme.colors.green};
    font-size: 15px;
}
.get-cont{
    
}
.paragraph{
    font-size: 14px; 
    margin-top: 10px;
}
hr {
    margin-top: 25px;
  }
`;
export const LocationSection = styled.div`
margin-top: 10px;
 .part-one{
    display: flex;
 }
`;
export const ContactSection = styled.div`
.part-sec{
    display: flex;

 }
`;
export const ImageSection = styled.div`
 
.contact-image{
    height: 500px;
    width: 403px;
}
`;