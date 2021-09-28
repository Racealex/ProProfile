import React from 'react'
import styled from 'styled-components'

export const HeaderTop = () => {
  return (
    <Container>
      <Title>GitHub Desktop</Title>
      <Wrapper>Focus on what matters instead of fighting with Git Whether you're new to Git or aseasoned user,GittHub Desktop simpifies your development workflow</Wrapper>
      <MyButton>Download for Windows (64bit)</MyButton>

      <span>Download for <p> macOS </p> or <p> Windows (msi)</p>By downloading , you agree to the <p>Open Source Application Terms.</p></span>
    </Container>
  );
};

export default HeaderTop;

const Container = styled.div`
  padding-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    display: flex;
    margin: 30px;
  }
  p{
    margin: 0; 5px;
    color: rgb(143, 85,179);
    
    :hover{
      text-decoration: underline;
      cursor: pointer;
    }

  }
`;
const Wrapper = styled.div`
  font-size: 25px;
  width: 600px;
  text-align: center;
  margin: ;
  margin-top: 15px;
  margin-bottom: 55px;
  color: lightgray
`;

const Title = styled.div`
  font-size: 60px;
  margin-top: 40px;
`;
const MyButton = styled.button`
  padding: 20px;
  background: linear-gradient(180deg, #7e1087, #d074ef); 
  outline: none;
  color: white;
  border: 0;
  font-size: 25px;
  border-radius: 5px;
  font-family: Poppins;
  
  :hover{
    background: linear-gradient(189deg, #d074ef, #7e1087);
    cursor: pointer;
  }
`;
