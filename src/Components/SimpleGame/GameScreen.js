import React from "react";
import styled from "styled-components";

const GameScreen = () => {
  return (
    <Section>
      <Wrapper>
        <Container>Race's Game</Container>
      <Row>
        <RowItem>
          <RowBox>Box1</RowBox>
          <RowBox1>me</RowBox1>
        </RowItem>
        <RowItem>
          <RowBox>Box1</RowBox>
          <RowBox1>Computer</RowBox1>
        </RowItem>
      </Row>
        <Result>Result</Result>
      </Wrapper>
    </Section>
  );
};

export default GameScreen;
const RowBox = styled.div``;
const RowBox1 = styled.div``;
const RowItem = styled.div``;
const Result = styled.div`
  margin-top: 20px;
  font-size: 30px;
`;
const Row = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
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
`;
const Wrapper = styled.div`
  padding-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



