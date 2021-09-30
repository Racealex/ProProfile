import React from 'react'
import styled from 'styled-components'
import HeaderBuilt from './HeaderBuilt';
import HeaderTop from './HeaderTop';
import PassProps from './PassProps';

export const RaceScreen = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderBuilt />
        <HeaderTop />
        <PassProps/>
      </Wrapper>
    </Container>
      
    
  );
};

export default RaceScreen;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: white;
  background-image: url('background.svg');
  background-repeat: no repeat;
  background-size: cover;
  background-position: center;
  padding-top:50px;

`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
