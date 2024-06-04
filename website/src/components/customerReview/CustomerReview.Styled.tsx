import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import { styled } from "styled-components";

export const TestimonialCard = styled.div`
  background: ${theme.colors.white};
  padding: 2rem;
  border: 1px solid ${theme.colors.lightnav};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  text-align: center;
  ${breakpoints.xs} {
    width: 300px !important;
  }
  ${breakpoints.lg} {
    width: 350px !important;
  }
`;

export const TestimonialText = styled.p`
  font-size: 14px;
  color: ${theme.colors.grey};
  font-weight: 400;
  text-align: left;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const AuthorName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${theme.colors.grey};
`;

export const AuthorTitle = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.grey};
`;
export const LeftArrowButton = styled.img`
  position: relative;
  top: 200px;
  left: -40px;
  border-radius: 50%;
  padding: 20px;
  background-color: ${theme.colors.white};
  background-image: url("images/arrowLeft.png");
  cursor: pointer;
  color: ${theme.colors.white};
  background-repeat: no-repeat, repeat;
  z-index: 999;
  &:hover {
    background-color: ${theme.colors.white};
    background-image: url("images/arrowLeft.png");
    cursor: pointer;
    color: ${theme.colors.white};
    background-repeat: no-repeat, repeat;
  }
  ${breakpoints.xs} {
    left: 5px;
  }
  ${breakpoints.lg} {
    left: -20px;
  }
`;

export const RightArrowButton = styled.img`
  position: absolute;
  right: -40px;
  top: 190px;
  border-radius: 50%;
  padding: 12px;
  background-color: ${theme.colors.green};
  cursor: pointer;
  background-image: url("images/arrowRight.png");
  background-repeat: no-repeat, repeat;
  color: ${theme.colors.white};

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
    background-image: url("images/arrowRight.png");
    background-repeat: no-repeat, repeat;
  }
  ${breakpoints.xs} {
    right: 8px;
  }
  ${breakpoints.lg} {
    right: -30px;
  }
`;

export const Warrper = styled.div`
  height: 70vh;
  ${breakpoints.xs} {
    height: 55vh;
  }
  ${breakpoints.lg} {
    height: 50vh;
  }
  ${breakpoints.xl} {
    height: 60vh;
  }
`;
export const ContentWarrper = styled.div`
  margin: 20px auto;
  max-width: 370px;
`;
export const Title = styled.h1`
  text-align: center;

  ${breakpoints.xs} {
    text-align: center;
    margin-top: 20px;
    font-size: 26px;
  }
  ${breakpoints.md} {
    font-size: 36px;
  }
`;

export const SildeContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  color: ${theme.colors.green};
  ${breakpoints.xs} {
    margin-top: 20px;
  }
  ${breakpoints.md} {
    font-size: 22px;
  }
`;
