import styled from "styled-components";
import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";


export const MainWrapper = styled.div<{ 
    imageAlignment: string;
    background?: string; 
}>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    margin-top: 60px;
    padding: 30px;    
    background: ${({background,imageAlignment }) => (imageAlignment === "right" ? `${background}` : `none`)};
    ${breakpoints.xs} {
        grid-template-columns: 1fr;        
    }
    ${breakpoints.lg} {
        grid-template-columns: 1fr 1fr;
    }
`;

export const DetailWrapper = styled.div<{
    imageAlignment: string,
    border?: string;
    objectFit?: string;
    height: string;
    width: string;
    marginTop: string;
}>`
    order: ${({ imageAlignment }) => (imageAlignment === "right" ? 2 : 1)};
    border: ${({ border }) => (border ? `${border}` : "none")};
    border-radius: 40px 0px 40px 0px;
    height: 300px;
    width: 470px;
    img {
        border-radius: 40px 0px 40px 0px;
        height: ${({height}) => (height)};
        width: ${({width}) => (width)};
        margin-left: 15px;
        margin-top: ${({marginTop}) => (marginTop)};
        object-fit: ${({ objectFit }) => (objectFit ? `${objectFit}` : "cover")};
    }
    ${breakpoints.xs} {
        order: 1;
        margin-left: 20px;
        margin-right: 0px;
        margin-top: 30px;
        margin-bottom: -20px;
        height: 200px;
        width: 270px;
        img {
            height: 100%;
            width: 100%;
        }
    }
    ${breakpoints.lg} {
        order: ${({ imageAlignment }) => (imageAlignment === "right" ? 2 : 1)};
        height: 300px;
        width: 470px;
        margin-left: 50px;
        img{
            height: ${({height}) => (height)};
            width: ${({width}) => (width)};
            margin-top: ${({marginTop}) => (marginTop)};
        }
    }
`;

export const AboutDiv = styled.div`
    margin-top:40px;
    h4 {
        font-size: 18px;
        font-weight: 600;
        line-height: 21.6px;
        color: ${theme.colors.green};
    }
    h2 {
        color: ${theme.colors.navy};
        font-size: 28px;
        font-weight: 600;
        line-height: 38px;
        margin-top: 10px;
    }
    p {
        color: ${theme.colors.grey};
        margin-top: 10px;
        font-size: 16px;
    }
    button {
        border: none;
        background: ${theme.colors.green};
        color: ${theme.colors.white};
        padding: 10px;
        border-radius: 10px;
        margin-top: 25px;
        font-size: 16px;
        cursor:pointer;
        img {
            margin-left: 15px;
        }
    }
    ${breakpoints.xs} {
        order: 2;
        margin-right: 0px;
        margin-left: 0px;
    }
    ${breakpoints.lg} {
        margin-right: 50px;
        margin-left: 40px;
        h2{
            font-size:20px;
        }
        h4{
            font-size:12px;
        }
        p{
            font-size:12px;
        }
    }
`;


