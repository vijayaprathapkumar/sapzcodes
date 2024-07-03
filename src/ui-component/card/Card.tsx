import {
  ButtonStyled,
  CardDescription,
  CardIcon,
  CardTitle,
  CardWrapper,
  StyledCardContainer,
  ViewMoreLink,
} from "./Card.styled";

const MediumCard = ({ cardItems }: any) => {
  const { icon, title, description, isExpanded, viewMore } = cardItems;

  const { text, textIcon, action, href } = viewMore || {};

  const truncatedDescription =
    description.length > 200 && !isExpanded
      ? `${description.slice(0, 190)}...`
      : description;

  const renderViewMore = () => {
    if (href) {
      return (
        <ViewMoreLink href={`/services`}>
          {text} {textIcon}
        </ViewMoreLink>
      );
    }

    if (!href && truncatedDescription.length > 190) {
      return (
        <ButtonStyled onClick={action}>
          {text} {textIcon}
        </ButtonStyled>
      );
    }
    return null;
  };

  return (
    <StyledCardContainer>
      <CardWrapper isExpanded={isExpanded}>
        {icon && <CardIcon>{icon}</CardIcon>}
        <CardTitle>{title}</CardTitle>
        <CardDescription id={`desc-${title}`} isExpanded={isExpanded}>
          {truncatedDescription}
        </CardDescription>
        {renderViewMore()}
      </CardWrapper>
    </StyledCardContainer>
  );
};

export default MediumCard;
