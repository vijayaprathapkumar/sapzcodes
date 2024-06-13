import breakpoints from "@/themes/breakpoints";
import styled from "styled-components";

export const ContentSection = styled.div`
position: relative;
text-align: center;

.descrip{
 margin-top:20px;
}
  ${breakpoints.xs} {
   font-size: 10px;
   top: 50px;
   .descrip{
    font-size: 8px;
    margin-top:8px;
 }
  }
  ${breakpoints.md} {
     font-size: 15px;
      top: 80px;
   .descrip{
    font-size: 14px;
    margin-top:8px;
 }
  }
  ${breakpoints.lg} { 
    font-size: 20px;
   .descrip{
    font-size: 18px;
    margin-top:8px;
 }
  }
  ${breakpoints.xl} { 
     font-size: 24px;
     top: 100px;
   .descrip{
    font-size: 22px;
    margin-top:8px;
 }
  }
`;

export const CardSection = styled.div`
 ${breakpoints.xs} {
   margin-top: 30px;
   position: relative;
   right: 7px;
  }
  ${breakpoints.md} {
     margin-top: 60px;
     right: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  ${breakpoints.lg} { 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 90px;
  }
`;