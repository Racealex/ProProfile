import React from 'react'
import styled from 'styled-components';
import PortFolio from './PortFolio'


 const HomePage = () => {
    return (
      <Container>
      <Wrapper>
      <PortFolio/>
      </Wrapper>
      </Container>
    );
};

export default HomePage;

const Container = styled.div``;
const Wrapper = styled.div``;

