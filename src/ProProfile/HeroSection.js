import React from 'react'
import styled from 'styled-components';

const HeroSection = () => {
    return (
      <Container>
          <Wrapper>
            <Image/>
            <Content>
              <Title>Name</Title>
              <Desc>Description</Desc>
              <Div>
                <Button>Button</Button>
                <Button>Button</Button>
              </Div>
            </Content>
          </Wrapper>
      </Container>
    )
}

export default HeroSection;

const Image= styled.img`
width: 350px;
height: 500px;
object-fit: cover;
background-color: white;
margin: 0 30px;
`;
const Title= styled.div`
font-weight: bold;
font-size: 20px;
margin: 0 10px;

`;
const Desc = styled.div`
margin-top: 10px;
margin: 0 10px;
`;
const Content= styled.div`
margin: 0 20px;
`;
const Div = styled.div`
margin-top: 10px;
`;
const Button = styled.button`
margin: 0 10px;
width: 100px;
height: 40px;
color: black;
font-weight: bold;
border-radius: 3px;
border: 2px solid black;
outline: none;
`;
const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-color: #2b6777
`;
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 40px;
flex-wrap: wrap;
font-family: poppins;
`;
