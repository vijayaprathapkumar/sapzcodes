import { IoIosArrowForward } from "react-icons/io";
import {
  CardDescription,
  CardIcon,
  CardTitle,
  CardWrapper,
  StyledCardContainer,
  ViewMoreLink,
} from "./Card.styled";

interface ServiceItem {
  cardBgColor: string;
  bgColor: string;
  icon: JSX.Element;
  title: string;
  titleColor: string;
  descriptionColor: string;
  description: string;
}

const MediumCard = ({cardItems}:any) => {
  const {
    cardBgColor,
    bgColor,
    icon,
    title,
    titleColor,
    descriptionColor,
    description,
  } = cardItems;

  return (
    <StyledCardContainer>
      <CardWrapper cardBgColor={cardBgColor}>
        <CardIcon bgColor={bgColor}>{icon}</CardIcon>
        <CardTitle textColor={titleColor}>{title}</CardTitle>
        <CardDescription textColor={descriptionColor}>
          {description}
        </CardDescription>
        <ViewMoreLink cardBgColor={cardBgColor}>
          View More <IoIosArrowForward />
        </ViewMoreLink>
      </CardWrapper>
    </StyledCardContainer>
  );
};

export default MediumCard;
