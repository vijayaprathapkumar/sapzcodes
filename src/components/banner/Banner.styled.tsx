import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import { styled } from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  overflow: hidden;
  .set {
    position: relative;
  }
  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;
  }
`;

export const BackgroundGradient = styled.div`
  background-color: #212121;
  opacity: 0.6;
  position: absolute;
  width: 100%;
  height: 99%;
  top: 0;
  z-index: 0;
  ${breakpoints.xs} {
    height: 96%;
  }
  ${breakpoints.md} {
    height: 98%;
  }
  ${breakpoints.lg} {
    height: 98.4%;
  }
  ${breakpoints.xl} {
    height: 99%;
  }
`;
export const MainContent = styled.div`
  position: absolute;
  top: 20%;
  left: 8%;
  width: 750px;
  z-index: 2;
  font-weight: 600;
  font-size: 40px;
  color: ${theme.colors.white};
  ${breakpoints.xs} {
    top: 38px;
    width: 180px;
    font-weight: 600;
    font-size: 10px;
  }
  ${breakpoints.md} {
    top: 75px;
    left: 5%;
    width: 300px;
    z-index: 2;
    font-weight: 600;
    font-size: 18px;
  }
  ${breakpoints.lg} {
  top: 105px;
    left: 4%;
    width: 390px;
    font-size: 21px;
  }
  ${breakpoints.xl} {
    top: 150px;
    left: 5%;
    width: 600px;
    font-size: 35px;
  }
`;
export const SubContent = styled.div`
  position: absolute;
  top: 50%;
  left: 8%;
  width: 700px;
  z-index: 2;
  line-height: 1.8;
  color: ${theme.colors.white};
  .bold-text {
  font-weight: bold;
}

  ${breakpoints.xs} {
    top: 85px;
    width: 200px;
    font-size: 5px;
  }
  ${breakpoints.md} {
    top: 165px;
    left: 5%;
    width: 320px;
    font-size: 7px;
  }
  ${breakpoints.lg} {
    top: 210px;
    left: 4%;
    width: 460px;
    font-size: 10px;
  }
  ${breakpoints.xl} {
    top: 325px;
    left: 5%;
    width: 610px;
    font-size: 14px;
  }
`;
export const ButtonBox = styled.div`
  position: absolute;
  display: flex;
  top: 70%;
  left: 8%;
  height: 50px;
  z-index: 2;
  background-color:  ${theme.colors.green};
  border-radius: 5px;
  padding: 5px;

  .get-btn {
    position: relative;
    width: 150px;
    font-size: 13px;
    font-weight: 600;
    color: ${theme.colors.white};
    border: none;
    background-color:  ${theme.colors.green};
    &:hover {
      background-color:  ${theme.colors.green};
    }

    &:focus {
      outline: none;
    }
  }
  ${breakpoints.xs} {
    top: 130px;
    height: 15px;
    .get-btn {
      width: 45px;
      font-size: 5px;
    }
  }
  ${breakpoints.md} {
    top: 225px;
    left: 5%;
    height: 27px;

    .get-btn {
      width: 70px;
      font-size: 8px;
    }
  }
  ${breakpoints.lg} {
    top: 290px;
    left: 4%;
    height: 30px;
    .get-btn {
      width: 90px;
      font-size: 10px;
    }
  }
  ${breakpoints.xl} {
    top: 450px;
    left: 5%;
    height: 50px;
    .get-btn {
      width: 150px;
      font-size: 15px;
    }
  }
`;

export const ArrowImage = styled.img`
  height: 9px;
  margin-left: 10px;
  ${breakpoints.xs} {
    height: 5px;
    position: relative;
    top: 1px;
    margin-left: 5px;
  }
  ${breakpoints.md} {
    height: 7px;
    margin-left: 10px;
  }
  ${breakpoints.lg} {
    height: 9px;
    margin-left: 10px;
  }
  ${breakpoints.xl} {
    height: 10px;
    margin-left: 12px;
  }
`;
