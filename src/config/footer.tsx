import { CiInstagram } from "react-icons/ci"
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa"
import { RiTwitterXLine } from "react-icons/ri"

export const FooterDetails = [
    {
        image: "/images/codeslogo.png",
        title: "About",
        description: "At SAPZCODES, our collective vision resolve around unlocking the genuine power and usage of technology.With our expertise,we are committed to converting ideas into groundbreaking solutions."
    },
    {
        title: "Our Services",
        subApp: "App Development",
        subWeb: "Web Development",
        subErp: "SAP ERP",
        subout: "Outsourcing"
    },
    {
        title: "Quick Links",
        subApp: "Home",
        subWeb: "Employee Benefits",
        subErp: "Referral Program",
        subout: "Submit Your Resume"
    },
    {
        title: "Company",
        subApp: "About Us",
        subWeb: "Careers",
        subErp: "Contact us",
        subout: "Privacy Policy",
        subuse: "Terms of use",
    }
]

export const Footericons = [
    {
        href: "https://www.facebook.com",
        icon: <FaFacebookF />,
    },
    {
        href: "https://www.google.com",
        icon: <FaGoogle />,
    },
    {
        href: "https://www.instagram.com",
        icon: <CiInstagram />,
    },
    {
        href: "https://twitter.com",
        icon: <RiTwitterXLine />,
    },
    {
        href: "https://www.linkedin.com",
        icon: <FaLinkedinIn />,
    }
]
