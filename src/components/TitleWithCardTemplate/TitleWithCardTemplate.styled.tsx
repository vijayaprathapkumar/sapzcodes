import breakpoints from "@/themes/breakpoints";
import styled from "styled-components";

export const ServiceItemsContainer = styled.div`
  display: grid ;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 15px;
  row-gap: 15px;
  margin-top:5%;
  ${breakpoints.xs}{
    margin-top:43%;
  }
  ${breakpoints.sm}{
    margin-top:7%;
  }
`;
