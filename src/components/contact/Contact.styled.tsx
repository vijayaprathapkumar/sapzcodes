import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import styled from "styled-components";

export const ContactWrapper = styled.div`
display: flex;
${breakpoints.xs} { 
flex-direction: column;
}
${breakpoints.lg} {  
flex-direction: row;
}

`;
export const AddressContent = styled.div`
 position: relative;
 margin-top: 50px;
.conct{
    color: ${theme.colors.green};
    font-size: 15px;
}
.get-cont{
    line-height: 2;
}
.paragraph{
    font-size: 14px; 
    margin-top: 10px;
    line-height: 1.7;
}
hr {
    margin-top: 25px;
    width: 530px;
  }

  ${breakpoints.xs} { 
    width: 370px;
    position: relative;
    margin-top: 50px;
    left: 3%;

    hr {
        width: 370px;
      }
    }
    ${breakpoints.md} { 
        width: 500px;
       hr {
           width: 600px;
         }
       
    }
    ${breakpoints.lg} { 
       hr {
           width: 530px;
         }  
    }
    ${breakpoints.xl} {
    width: 430px;
    left: 7%;
    }
`;
export const LocationSection = styled.div`
margin-top: 30px;
 .part-one{
    display: flex;
    margin-top: 15px;
    gap: 10px;
 }
 .map{
   height: 20px;
   width: 20px;
 }
`;
export const ContactSection = styled.div`
margin-top: 30px;

.envelope-part{
 display: flex;
 align-items: center;
 margin-top: 15px;
 gap: 15px;
}
.envelope-part a {
  display: flex;
  align-items: center;
  text-decoration: none; 
  margin-right: 20px; 
}  
.envelope-part p {
  margin-left: 10px; 
}
.envelope{
  height: 20px;
  margin-top: 3px;
   width: 20px;
 }
.part-sec{
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
.part-sec p {
  margin-left: 10px; 
}
.whatsapp-icon {    
  color: #A9A9A9;
  font-size: 20px;
}
 .phone{
    height: 20px;
   width: 20px;
 }
`;
export const ImageSection = styled.div`
position: relative;

${breakpoints.xs} { 
 left: 2;
 margin-top: 10px;
 
 .contact-image{
    height: 450px;
    width: 350px;
}
}
${breakpoints.md} { 
    left: 35%;
    .contact-image{
        height: 480px;
        width: 403px;
    }
}
${breakpoints.lg} { 
    left: 7%;
    .contact-image{
        height: 500px;
        width: 403px;
    } 
}
${breakpoints.xl} { 
    left: 35%;
}
`;