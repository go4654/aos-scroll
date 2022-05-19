import AOS from "aos";
import { useEffect } from "react";
import styled from "styled-components";
import { mainSize } from "./styles/globalStyle";
import "aos/dist/aos.css";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: ${mainSize.basePadding};
`;

const Section1 = styled.section`
  height: 80vh;
  background-color: lightgray;
  padding: ${mainSize.basePadding};
  padding-top: 250px;
  h3 {
    font-size: 90px;
    font-weight: 700;
    letter-spacing: -4px;
  }
  p {
    max-width: 650px;
    width: 100%;
    margin-top: 20px;
    line-height: 1.5rem;
    font-size: 20px;
    font-weight: 300;
    opacity: 0.7;
  }
`;

const Section2 = styled.section`
  background-color: lightgray;
  padding: ${mainSize.secPadding};
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
`;

const ConWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Con = styled.div`
  width: 30%;
  height: 350px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  &:nth-child(2) {
    margin-top: 100px;
  }
  &:nth-child(3) {
    margin-top: 200px;
  }
`;

const Section3 = styled.section`
  background-color: lightgray;
  height: 70vh;
`;

const Footer = styled.div``;
export const Scroll = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header></Header>
      <Section1>
        <h3>THIS IS TITLE AREA</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a
        </p>
      </Section1>

      <Section2>
        <Title>This is Title Area</Title>
        <ConWrap>
          <Con data-aos-offset="500" data-aos="fade-down">
            content1
          </Con>
          <Con data-aos-duration="40000" data-aos="slide-down">
            content2
          </Con>
          <Con data-aos="fade-up" data-aos-once="true">
            content3
          </Con>
        </ConWrap>
      </Section2>

      <Section3>section 3</Section3>
      <Footer></Footer>
    </div>
  );
};
