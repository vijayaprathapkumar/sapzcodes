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
    height: 98%;
  }
  ${breakpoints.md} {
    height: 99%;
  }
  ${breakpoints.xl} {
    height: 99.5%;
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
    top: 40px;
    width: 130px;
    font-weight: 400;
    font-size: 10px;
  }
  ${breakpoints.md} {
    top: 60px;
    left: 5%;
    width: 300px;
    z-index: 2;
    font-weight: 600;
    font-size: 20px;
  }
  ${breakpoints.lg} {
    left: 4%;
    width: 350px;
    font-size: 25px;
  }
  ${breakpoints.xl} {
    top: 110px;
    left: 5%;
    width: 600px;
    font-size: 40px;
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

  ${breakpoints.xs} {
    top: 80px;
    width: 220px;
    font-size: 6px;
  }
  ${breakpoints.md} {
    top: 145px;
    left: 5%;
    width: 350px;
    font-size: 10px;
  }
  ${breakpoints.lg} {
    top: 170px;
    left: 4%;
    width: 410px;
    font-size: 15px;
  }
  ${breakpoints.xl} {
    top: 280px;
    left: 5%;
    width: 600px;
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
    top: 125px;
    height: 20px;
    .get-btn {
      width: 50px;
      font-size: 5px;
    }
  }
  ${breakpoints.md} {
    top: 220px;
    left: 5%;
    height: 27px;

    .get-btn {
      width: 70px;
      font-size: 8px;
    }
  }
  ${breakpoints.lg} {
    top: 300px;
    left: 4%;
    height: 30px;
    .get-btn {
      width: 90px;
      font-size: 10px;
    }
  }
  ${breakpoints.xl} {
    top: 400px;
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
