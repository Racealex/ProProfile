import React from 'react'
import styled from 'styled-components';
import {PortFolio}from './PortFolio';


export const HomePage = () => {
    return (
      <Container>
      <Wrapper>
      <PortFolio/>
      </Wrapper>
      </Container>
    );
};

const Container = styled.div``;
const Wrapper = styled.div``;

