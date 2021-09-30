
import styled from "styled-components";
import React, { useState, useEffect } from "react"

const GameScreen = () => {
  const [picker, setPicker] = useState(0);
  const [computer, setComputer] = useState(0);

  const guessValue = () => {
      setComputer (Math.random());
      console.log(computer)
  };

  useEffect(() => {
      guessValue();
  }, [])

  return (
    <Section>
      <Wrapper>
        <Container>Race's Game</Container>
      <Row>
        <RowItem>
          <RowBox>{picker}</RowBox>
          <Number>
            <DisplaySection
            onClick={() => {
               setPicker(1);
               console.log(picker);
            }}
            >
               1{""}
               </DisplaySection>
            <DisplaySection
            onClick={() => {
              setPicker(2)
              console.log(picker);
            }}
            >
                2
                {""}
                </DisplaySection>
            <DisplaySection
            onClick={() => {
              setPicker(3);
              console.log(picker);
            }}
            >

               3
               {""}
               </DisplaySection>

            <DisplaySection
            onClick={() => {
              setPicker(4);
              console.log(picker);
            }}
            >
                4{""}
                </DisplaySection>

            <DisplaySection
            onClick={() => {
               setPicker(5);
               console.log(picker);

            }}
            >
               5{""}
               </DisplaySection>
            </Number>
          <RowBox1>me</RowBox1>
        </RowItem>
        <RowItem>
          <RowBox>{picker}</RowBox>
          <RowBox1>Computer</RowBox1>
        </RowItem>
      </Row>
        <Result>Result</Result>
      </Wrapper>
    </Section>
  );
};

export default GameScreen;

const Number = styled.div`
display: flex;
`;
const RowBox = styled.div`
  width: 250px;
  height: 150px;
  background-Color: white;
  border-radius: 10px;
  margin: 20px;
  color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
`;
const RowBox1 = styled.div``;
const RowItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Result = styled.div`
  margin-top: 20px;
  font-size: 30px;
`;
const Row = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
`;
const DisplaySection = styled.div`
  width: 30%;
  height: 30%;
  min-height: 100vh;
  background-color: teal; 
  border-radius: 50px;
  justify-content: center;
  display: flex;
  aligm_-items: center;
  font-size: 15px;
  font-weight: bold;
  transform: scale(1);
  transition: all 350ms


  hover {
    cursor: pointer;
    transform: scale(1.2);
  }

`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: brown;
`;
const Container = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin: 30px;
`;
const Wrapper = styled.div`
  padding-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



