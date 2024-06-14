/* eslint-disable @next/next/no-img-element */
import { theme } from "@/themes/theme";
import { BiDollarCircle, BiUserCircle } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiSuitcaseSimpleBold, PiSuitcaseSimpleLight } from "react-icons/pi";

export const ServicecarouselTitle = {
  title: "Our Services",
  subTitle: "Experience Excellence: Delve into Our Range of Services",
  description:
    "SAPZCODES stands as epitome of innovation in management and technology consulting. As industry pioneers, we offer a dynamic suite of systems integration and consulting services that elevate your operations to a new heights of efficiency and profitability.",
};
export const CareerTitle = {
  title: "Lets have a Walk",
  subTitle: "Opportunities That We Provide You",
  description:
    "SAPZCODES is an innovative management and technology consulting firm. We provide our Clients a comprehensive suite of systems integration",
};

export const ServicesItemsCarrer = [
  {
    title: "SAP Core ABAP Consulting",
    icon: <img src="images/Suitcase.png" alt="Suitcase" />,
    description:
      "Tailored consulting services focusing on SAP Core ABAP to optimize business processes and enhance system functionality.",
    bgColor: theme.colors.white,
    cardBgColor: theme.colors.green,
    titleColor: theme.colors.white,
    descriptionColor: theme.colors.white,
  },
  {
    title: "ABAP on HANA Consulting",
    icon: <img src="images/MoneyCoinDollar.png" alt="No MoneyCoinDollar" />,
    description:
      "Specialized consulting expertise in ABAP on HANA, enabling businesses to leverage the power of in-memory computing for enhanced performance.",
    bgColor: theme.colors.dark,
    cardBgColor: theme.colors.white,
    titleColor: theme.colors.navy,
    descriptionColor: theme.colors.lightgrey,
  },
  {
    title: "SAP UI5 and FIORI Consulting",
    icon: <img src="images/LightBulb.png" alt="No LightBulb" />,
    description:
      "Consulting services dedicated to SAP UI5 and FIORI, empowering businesses with intuitive user interfaces and seamless user experiences.",
    bgColor: theme.colors.dark,
    cardBgColor: theme.colors.white,
    titleColor: theme.colors.navy,
    descriptionColor: theme.colors.lightgrey,
  },
  {
    title: "OData and Rest API Integration",
    icon: <img src="images/UserProfile.png" alt="No UserProfile" />,
    description:
      "Proficient integration services for OData and Rest APIs, facilitating seamless data exchange and connectivity across systems.",
    bgColor: theme.colors.dark,
    cardBgColor: theme.colors.white,
    titleColor: theme.colors.navy,
    descriptionColor: theme.colors.lightgrey,
  },
  {
    title: "SAP BTP on ABAP Components Consulting",
    icon: <img src="images/UserProfile.png" alt="No UserProfile" />,
    description:
      "Consulting assistance for SAP Business Technology Platform on ABAP Components, enhancing the scalability and flexibility of business solutions.",
    bgColor: theme.colors.dark,
    cardBgColor: theme.colors.white,
    titleColor: theme.colors.navy,
    descriptionColor: theme.colors.lightgrey,
  },
];
export const CustomItems = [
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    author: "Eleanor Pena",
    title: "CEO of Tukang Tikung",
    imageSrc: "images/AuthorImg1.png",
  },
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    author: "Savannah Nguyen",
    title: "CEO of Tukang Tikung",
    imageSrc: "images/AuthorImg2.png",
  },
];

export const EnvironmentItems = [
  {
    content:
      " Adding emerging SAP technologies to the service portfolio to cater to evolving market demands",
  },
  {
    content:
      " Forming robust alliances with SAP and industry leaders to enhance service quality and each.",
  },
  {
    content:
      " Empowering consultants with advanced training and development opportunities to stay ahead in a competitive landscape",
  },
  {
    content:
      " Improving customer service processes to ensure prompt issue resolution and client satisfaction.",
  },
  {
    content:
      "  Fostering a culture of innovation through dedicated R&D efforts to deliver cutting edge solutions to clients",
  },
];

export const ServicesItemsAll = [
  {
    title: "Technology Service",
    icon: <PiSuitcaseSimpleBold />,
    description:
      "At SAPZCODES , our technology services are driven by a commitment to delivering cutting-edge solutions to our clients. We specialize in implementing advanced software solutions tailored to meet the unique needs of our customers. Our team of skilled professionals utilizes the latest technologies and methodologies to ensure seamless integration and optimal performance of software systems. Whether it's SAP implementation, customization, or support, we strive for technical excellence in every aspect of our technology services.",
  },
  {
    title: "IT Consulting Service",
    icon: <BiDollarCircle />,
    description:
      "Our IT consulting services are designed to provide strategic guidance and support to businesses seeking to leverage technology for growth and success. We offer comprehensive consulting services encompassing IT strategy development, system architecture design, and process optimization. Our team of experienced consultants works closely with clients to understand their business objectives and tailor solutions that align with their goals. From identifying IT challenges to implementing innovative solutions, we are committed to delivering value-driven IT consulting services.",
  },
  {
    title: "Management Consulting",
    icon: <HiOutlineLightBulb />,
    description:
      "At SAPZCODES, we offer management consulting services aimed at helping organizations improve their overall performance and achieve sustainable growth. Our management consultants bring extensive industry experience and expertise to assist clients in areas such as organizational strategy, business process optimization, and change management. We collaborate closely with clients to develop actionable strategies and implement effective solutions that drive business success. Our holistic approach to management consulting ensures that we address key challenges and opportunities to enhance organizational performance and competitiveness.",
  },
  {
    title: "Software Products Development",
    icon: <BiUserCircle />,
    description:
      "In our software products development division, we focus on creating innovative and scalable solutions that address the evolving needs of businesses across various industries. Our product development process is guided by a deep understanding of market trends, user requirements, and technological advancements. We leverage agile methodologies and robust development frameworks to deliver high-quality software products that empower our clients to achieve their business objectives. Whether it's enterprise applications, mobile apps, or custom software solutions, we are committed to excellence in software products development.",
  },
  {
    title: "Corporate Training",
    icon: <BiDollarCircle />,
    description:
      "Our IT training services aim to equip individuals and organizations with the knowledge and skills required to succeed in today's dynamic IT landscape. We offer a wide range of training programs covering various technologies, including SAP, software development, data analytics, and more. Our training courses are delivered by industry experts and feature hands-on exercises and real-world scenarios to ensure practical learning outcomes. We are dedicated to providing comprehensive and effective IT training solutions that empower professionals to excel in their careers and organizations to stay ahead of the competition.",
  },
  {
    title: "Employment Staffing",
    icon: <BiDollarCircle />,
    description:
      "As part of our commitment to supporting talent development and employment opportunities, we offer staffing services to connect skilled professionals with leading organizations. Through our extensive network and rigorous screening processes, we identify and match candidates with the right skills and expertise to meet our clients' staffing needs. Whether it's temporary staffing, permanent placements, or specialized recruitment services, we strive to facilitate successful employment partnerships that benefit both employers and job seekers. Our focus on quality, reliability, and professionalism ensures that we deliver value-driven staffing solutions that drive business success.",
  },
  {
    title: "Outsourcing",
    icon: <HiOutlineLightBulb />,
    description:
      "In addition to our core services, we also offer outsourcing solutions to help streamline operations and reduce overhead costs for our clients. Our outsourcing services cover a wide range of business including finance and accounting, human resources, customer service, and procurement. We leverage automation, analytics, and best-in-class technologies to optimize process efficiency, improve accuracy, and enhance service quality. By outsourcing non-core functions to us, our clients can focus on their core competencies and strategic initiatives, leading to increased productivity and profitability.",
  },
];
