import breakpoints from "@/themes/breakpoints";
import { styled } from "styled-components";

export const BannerWrapper = styled.div`
  min-height: 70vh;
`;

export const SectionWrapper = styled.section`
  height: 100vh;
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
  color: white;
  ${breakpoints.xs} {
    top: 40px;
    width: 180px;
    // z-index: 50;
    font-weight: 400;
    font-size: 10px;
  }
  ${breakpoints.md} {
    top: 60px;
    left: 5%;
    width: 360px;
    z-index: 2;
    font-weight: 600;
    font-size: 20px;
  }
  ${breakpoints.lg} {
    left: 4%;
    width: 450px;
    font-size: 25px;
  }
  ${breakpoints.xl} {
    top: 110px;
    left: 5%;
    width: 700px;
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
  color: white;

  ${breakpoints.xs} {
    top: 90px;
    width: 220px;
    font-size: 6px;
  }
  ${breakpoints.md} {
    top: 160px;
    left: 5%;
    width: 350px;
    font-size: 10px;
  }
  ${breakpoints.lg} {
    top: 180px;
    left: 4%;
    width: 460px;
    font-size: 15px;
  }
  ${breakpoints.xl} {
    top: 310px;
    left: 5%;
    width: 700px;
  }
`;
export const ButtonBox = styled.div`
  position: absolute;
  display: flex;
  top: 70%;
  left: 8%;
  height: 50px;
  z-index: 2;
  background-color: #46d200;
  border-radius: 10px;
  padding: 5px;

  .get-btn {
    position: relative;
    width: 150px;
    font-size: 13px;
    font-weight: 600;
    color: white;
    border: none;
    background-color: #46d200;
    &:hover {
      background-color: #46d200;
    }

    &:focus {
      outline: none;
    }
  }
  ${breakpoints.xs} {
    top: 135px;
    height: 20px;
    .get-btn {
      width: 50px;
      font-size: 5px;
    }
  }
  ${breakpoints.md} {
    top: 240px;
    left: 5%;
    height: 25px;
    .get-btn {
      width: 100px;
      font-size: 10px;
    }
  }
  ${breakpoints.lg} {
    top: 340px;
    left: 4%;
    height: 28px;
    .get-btn {
      width: 120px;
      font-size: 13px;
    }
  }
  ${breakpoints.xl} {
    top: 420px;
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
