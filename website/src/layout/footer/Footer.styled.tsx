import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import styled from "styled-components";

export const Footereraper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top:30px;
    ${breakpoints.xs}{
        grid-template-columns: 1fr;
    }
    ${breakpoints.md}{
        grid-template-columns: 1fr 1fr;
        margin-top:100px;
    }
    ${breakpoints.lg}{
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin-top:100px;
    }
`
export const Maindiv = styled.div`
    padding:20px;
    margin-left:80px;
    img{
        margin-bottom:10px;
    }
    p{
        margin-top:10px;
        font-size:14px;
        font-weight:400;
        color:${theme.colors.grey}; 
    }
    li{
        list-style:none;
        margin-top:15px;
        color:${theme.colors.grey};
        font-size:14px;
        font-weight:400; 
    }
    ${breakpoints.xs}{
        margin-left:10px;
    }
    ${breakpoints.md}{
        margin-left:90px;
    }
    ${breakpoints.lg}{
        margin-left:60px;
    }
    ${breakpoints.xl}{
        margin-left:90px;
    }
`
export const Bootomwrapper = styled.div`
    display:flex;
    p{
        color:${theme.colors.grey};
        font-size:14px;
        font-weight:400; 
        margin:20px 0px 10px 80px;
    }
    ${breakpoints.xs}{
        margin:0px 10px 0px -70px;
        gap:0px;
        p{
            font-size:10px;
            width:50%; 
        }
    }
    ${breakpoints.sm}{
        margin:0px 10px 0px -55px;
        gap:0px;
        p{
            font-size:10px;
            width:50%; 
        }
    }
    ${breakpoints.md}{
        margin:0px 10px 0px 0px;
        p{
            font-size:10px;
            width:50%; 
        }
    }
    ${breakpoints.lg}{
        margin:0px 0px 0px 0px;
        p{
            font-size:12px; 
        }
    }
    ${breakpoints.xl}{
        margin:20px 0px 10px 30px;
        p{
            font-size:16px; 
        }
    }
`
export const IconWrapper = styled.div`
    margin:10px 0px 10px 360px;
    ${breakpoints.xs}{
        margin:20px 0px 10px 0px;
    }
    ${breakpoints.sm}{
        margin:20px 0px 10px 167px;
    }
    ${breakpoints.md}{
        margin:10px 0px 10px 80px;
    }
    ${breakpoints.lg}{
        margin:10px 0px 10px 140px;
    }
    ${breakpoints.xl}{
        margin:10px 0px 10px 250px;
    }
`

export const FacebookIcon = styled(FaFacebookF)`
    border: 1px solid ${theme.colors.light};
    color:${theme.colors.icon};
    border-radius:25px;
    box-shadow: 0px 6px 10px 0px #0000000F;
    height:40px;
    width:40px;
    padding:10px;
    ${breakpoints.xs}{
        height:25px;
        width:25px;
        padding:5px;
    }
    ${breakpoints.lg}{
        height:40px;
        width:40px;
        padding:10px;
    }
`
export const GoogleIcon = styled(FaGoogle)`
    border: 1px solid ${theme.colors.light};
    color:${theme.colors.icon};
    border-radius:25px;
    box-shadow: 0px 6px 10px 0px #0000000F;
    height:40px;
    width:40px;
    padding:10px;
    margin-left:10px;
    ${breakpoints.xs}{
        height:25px;
        width:25px;
        padding:5px;
        margin-left:3px;
    }
    ${breakpoints.lg}{
        height:40px;
        width:40px;
        padding:10px;
        margin-left:10px;
    }
`
export const InstaIcon = styled(CiInstagram)`
    border: 1px solid ${theme.colors.light};
    color:${theme.colors.icon};
    border-radius:25px;
    box-shadow: 0px 6px 10px 0px #0000000F;
    height:40px;
    width:40px;
    padding:10px;
    margin-left:10px;
    ${breakpoints.xs}{
        height:25px;
        width:25px;
        padding:5px;
        margin-left:3px;
    }
    ${breakpoints.lg}{
        height:40px;
        width:40px;
        padding:10px;
        margin-left:10px;
    }
`
export const TwitterIcon = styled(RiTwitterXLine)`
    border: 1px solid ${theme.colors.light};
    color:${theme.colors.icon};
    border-radius:25px;
    box-shadow: 0px 6px 10px 0px #0000000F;
    height:40px;
    width:40px;
    padding:10px;
    margin-left:10px;
    ${breakpoints.xs}{
        height:25px;
        width:25px;
        padding:5px;
        margin-left:3px;
    }
    ${breakpoints.lg}{
        height:40px;
        width:40px;
        padding:10px;
        margin-left:10px;
    }
`
export const LinkedInIcon = styled(FaLinkedinIn)`
    border: 1px solid ${theme.colors.light};
    color:${theme.colors.icon};
    border-radius:25px;
    box-shadow: 0px 6px 10px 0px #0000000F;
    height:40px;
    width:40px;
    padding:10px;
    margin-left:10px;
    ${breakpoints.xs}{
        height:25px;
        width:25px;
        padding:5px;
        margin-left:3px;
    }
    ${breakpoints.lg}{
        height:40px;
        width:40px;
        padding:10px;
        margin-left:10px;
    }
`