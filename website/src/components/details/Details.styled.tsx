import styled from "styled-components";
import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";

interface DetailComponentProps {
    reverse: boolean;
    index: number;
}

export const MainWrapper = styled.div<DetailComponentProps>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    margin-top: 60px;
    padding: 30px;
    background: ${({ index }) => (index === 1 ? '#F0F7EC' : '#fff')};

    ${({ reverse }) => reverse && `
        grid-template-areas: 
            "about detail";
    `}    
    ${({ reverse }) => !reverse && `
        grid-template-areas: 
            "detail about";
    `}    
    ${breakpoints.xs} {
        grid-template-columns: 1fr;
        grid-template-areas: 
            "detail"
            "about";
    }
    ${breakpoints.lg} {
        grid-template-columns: 1fr 1fr;
        ${({ reverse }) => reverse && `
            grid-template-areas: 
                "about detail";
        `}        
        ${({ reverse }) => !reverse && `
            grid-template-areas: 
                "detail about";
        `}
    }
`;

export const DetailWrapper = styled.div<DetailComponentProps>`
    grid-area: detail;
    border: ${({ index }) => (index === 1 || index === 2 ? 'none' : '1px solid #46D200')};
    border-radius: 40px 0px 40px 0px;
    height: 300px;
    width: 470px;
    margin-left: ${({ index }) => (index === 0 ? '70px' : '0px')};
    margin-right: ${({ reverse }) => (reverse ? '70px' : '0px')};
    img {
        border-radius: 40px 0px 40px 0px;
        height: 300px;
        width: 470px;
        margin-left: 15px;
        margin-top: -15px;
        object-fit: ${({ index }) => (index === 1 || index === 2 ? 'contain' : 'cover')};
    }
    ${breakpoints.xs} {
        margin-left: 20px;
        margin-right: 0px;
        margin-top: 30px;
        margin-bottom: 20px;
        height: 200px;
        width: 270px;
        img {
            height: 200px;
            width: 270px;
        }
    }
    ${breakpoints.lg} {
        height: 300px;
        width: 470px;
        margin-left: ${({ index }) => (index === 0 ? '70px' : '0px')};
        margin-right: ${({ reverse }) => (reverse ? '70px' : '0px')};
        img {
            height: 300px;
            width: 470px;
        }
    }
`;

export const AboutDiv = styled.div<DetailComponentProps>`
    grid-area: about;
    margin-right: ${({ reverse }) => (reverse ? '0px' : '50px')};
    margin-left: ${({ reverse }) => (reverse ? '50px' : '0px')};
    margin-top:20px;
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
        color: #fff;
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
        margin-right: 0px;
        margin-left: 0px;
    }
    ${breakpoints.lg} {
        margin-right: ${({ reverse }) => (reverse ? '0px' : '50px')};
        margin-left: ${({ reverse }) => (reverse ? '50px' : '0px')};
    }
`;


