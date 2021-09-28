import React from 'react'
import styled from'styled-components';

const GlobalButton = ({name, rg, rg1, rg3, rg4}) => {
    return (
       <Container rg = {rg} rg1 = {rg1} rg3={rg3} rg4 ={rg4}>
           <Wrapper>{name}</Wrapper>
       </Container>
    )
}
 export default GlobalButton;

 const Container = styled.div`
 background: ${({ rg }) => (rg ? 'yellow':'green')}; 
 padding: 10px;
 border-radius: 3px; 
 transition: all 350ms;
 margin: 5px;
 
 
 
 color: ${({ rg3 }) => (rg3 ? 'white':'black')};

 :hover{
     cursor: pointer;
     transform: scale(1.05);
      background-color: ${({ rg1 }) => (rg1 ? 'orange':'teal')};
     color: ${({ rg4 }) => (rg4 ? 'black':'white')};
 }
 `;
 const Wrapper= styled.div`
 display: flex;
 
 
 `;