import styled from "styled-components";
import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";


export const MainWrapper = styled.div<{ 
    imageAlignment: string;
    background?: string; 
}>`
    display: flex;
    margin-top: 60px;
    background: ${({background,imageAlignment }) => (imageAlignment === "right" ? `${background}` : `none`)};
    .image{
        height:40px;
        width:40px;
        position:absolute;
        right:10px;  
    }
    .dots{
        height:40px;
        width:40px;
        position:absolute;
        right:50px;
    }
    .dark{
        height:40px;
        width:40px;
        position:absolute;
        right:170px;
        margin-top:360px;
    }
    .light{
        height:30px;
        width:30px;
        position:absolute;
        right:150px;
        margin-top:375px;
    }
    ${breakpoints.xs} {
        flex-direction:column;
        .image{
            margin-top:520px; 
        }
        .dots{
            margin-top:-50px;
            right:10px;
        } 
        .dark{
            margin-top:600px;
            right:40px;
        } 
        .light{
            margin-top:620px;
            right:20px;
        }      
    }
    ${breakpoints.sm}{
        .image{
            margin-top:450px;
        }
        .dark{
            margin-top:500px;
            right:40px;
        } 
        .light{
            margin-top:520px;
            right:20px;
        }
    }
    ${breakpoints.md} {
        flex-direction:column;
        .image{
            margin-top:530px; 
        }
        .dots{
            margin-top:-30px;
            right:50px;
        } 
        .dark{
            margin-top:580px;
            right:40px;
        } 
        .light{
            margin-top:600px;
            right:20px;
        }      
    }
    ${breakpoints.lg} {
        flex-direction:row;
        .image{
            top:1050px; 
        }
        .dark{
            margin-top:360px;
            right:170px;
        } 
        .light{
            right:150px;
            margin-top:375px;
        }     
    }
    ${breakpoints.xl} {
        .image{
            margin-top:560px; 
        }     
    }
`;

export const DetailWrapper = styled.div<{
    imageAlignment: string,
    border?: string;
    objectFit?: string;
    height: string;
    width: string;
    marginTop: string;
    marginLeft:string;
}>`
    order: ${({ imageAlignment }) => (imageAlignment === "right" ? 2 : 1)};
    border: ${({ border }) => (border ? `${border}` : "none")};
    border-radius: 40px 0px 40px 0px;
    width:470px;
    img {
        border-radius: 40px 0px 40px 0px;
        height: ${({height}) => (height)};
        width: ${({width}) => (width)};
        margin-left: 15px;
        margin-top: ${({marginTop}) => (marginTop)};
        margin-bottom:10px;
        object-fit: ${({ objectFit }) => (objectFit ? `${objectFit}` : "cover")};
    }
    ${breakpoints.xs} {
        order: 1;
        margin-left: 50px;
        margin-right: 0px;
        margin-top: 60px;
        margin-bottom:-10px;
        width:270px;
        img {
            height: 230px;
            width: 270px;
        }
    }
    ${breakpoints.md} {
        order: 1;
        margin-left: ${({ imageAlignment }) => (imageAlignment === "right" ? '50%' : "60px")};
        margin-right: 0px;
        margin-top: 50px;
        margin-bottom:-20px;
        width:370px;
        img {
            height: 320px;
            width: 370px;
        }
    }

    ${breakpoints.lg} {
        order: ${({ imageAlignment }) => (imageAlignment === "right" ? 2 : 1)};
        margin-left: ${({marginLeft}) => (marginLeft)};
        width:470px;
        height:300px;
        img{
            height: ${({height}) => (height)};
            width: ${({width}) => (width)};
            margin-top: ${({marginTop}) => (marginTop)};
        }
    }
`;

export const AboutDiv = styled.div`
    margin-top:25px;
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
        padding: 15px;
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
        margin-right: 20px;
        margin-left:30px;
        margin-top:30px;
        h4{
           font-size:14px;
        }
        h2{
          font-size:12px;
        }
        p{
          font-size:12px;
        }
        button{
           font-size:12px;
           margin-bottom:20px;
        }
    }
    ${breakpoints.sm}{
        margin-top:50px;
        margin-left:50px;
    }
    ${breakpoints.sm}{
        margin-left:60px;
    }
    ${breakpoints.lg} {
        margin-right: 100px;
        margin-left:100px;
        margin-top:50px;
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
    ${breakpoints.xl} {
        margin-right: 200px;
        margin-left: 100px;
        h2{
            font-size:23px;
        }
        h4{
            font-size:14px;
        }
        p{
            font-size:14px;
        }
    }
`;

