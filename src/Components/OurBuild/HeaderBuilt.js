import React from 'react';
import styled from 'styled-components';
import img from "../img/desktop-icon.svg";

export const HeaderBuilt = () => {
  return (
    <Container>
      <Image src={img} />
     <Wrapper>
       <NavLink clr>Overview</NavLink>
       <NavLink>Release Note</NavLink>
       <NavLink>Help</NavLink>
     </Wrapper>
    </Container>
      
    
  );
};

export default HeaderBuilt;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items : center;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  background-color: Black;
  object-fit: cover; 
  margin-bottom: 30px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  width: 300px;
  justify-content: space-around;
  display: flex;
`;
const NavLink = styled.div`
  font-weight: bold;
  color: ${({ clr }) => (clr ? "white" : "#8F55B3")};

  :hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;