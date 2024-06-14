import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import Link from "next/link";
import styled from "styled-components";

export const Footerwrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 30px;
  ${breakpoints.xs} {
    grid-template-columns: 1fr;
  }
  ${breakpoints.md} {
    grid-template-columns: 1fr 1fr;
    margin-top: 100px;
    column-gap:270px;
  }
  ${breakpoints.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 100px;
    justify-items: end;
    column-gap:0px;
  }
`;

export const Maindiv = styled.div`
  padding: 20px 0px;
  img {
    margin-bottom: 10px;
  }
  p {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    color: ${theme.colors.grey};
  }
  li {
    list-style: none;
    margin-top: 15px;
    color: ${theme.colors.grey};
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
  }
`;
export const Bootomwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  p {
    color: ${theme.colors.grey};
    font-size: 14px;
    font-weight: 400;
  }
  ${breakpoints.xs} {
    p {
      font-size: 10px;
    }
  }
  ${breakpoints.lg} {
    p {
      font-size: 12px;
    }
  }
  ${breakpoints.xl} {
    p {
      font-size: 16px;
    }
  }
`;

export const Iconwrapper = styled.div`
  display:flex;  
  column-gap:5px;
`


export const LinkStyled = styled(Link) <{ href: string }>`
 

    border: 1px solid ${theme.colors.light};
    color: ${theme.colors.icon};
    border-radius: 25px;
    box-shadow: 0px 6px 10px 0px ${theme.colors.shadow};
    height: 40px;
    width: 40px;
    padding: 10px;
  ${breakpoints.xs} {
    height: 25px;
    width: 25px;
    padding: 5px;
  }
  ${breakpoints.lg} {
    height: 40px;
    width: 40px;
    padding: 10px;
  }
`



