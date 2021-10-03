import React from 'react'
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import logo from '../logoimg.jpg'

const PortFolio = () => {
    return (
     <Container>
        <Wrapper>
          <Logo src={logo} />
          <Navigation>
            <Nav>
              <HomeIcon />
              <span>Home</span>
            </Nav>
            <Nav>
              <HomeRepairServiceIcon />
              <span>Service</span>
            </Nav>
            <Nav>
              <OndemandVideoIcon />
              <span>Video</span>
            </Nav>
            <Nav>
              <ContactPageIcon />
              <span>Contact</span>
            </Nav>
          </Navigation>
        </Wrapper>
      </Container>
    );
};  

export default PortFolio;

const Nav = styled.div`
display: flex;
align-items: center;
margin: 0 10px;

.MuiSvgIcon-root{
  font-size: 20px;
  margin-right: 5px;
  color: rgba(225, 255, 255, 0.7);
  transition: all 400ms;
}

span{
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  position: relative;

  :after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: white;
    opacity: 0;
    transition: all 400ms;
    transform: scale(0);
    transform-origin: center;
  }
}

:hover{
  cursor: pointer;

  .MuiSvgIcon-root{
    color: rgba(225, 255, 255, 0.7);
  }

  span {
    :after {
    opacity: 1;
    transform: scale(1);
    } 
  }
}
`;
const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #011834;
  color: white;
  font-family: Poppins;
`;

const Wrapper = styled.div`
  width: 180px;
  height: 80px;
  display: flex;
  align iteam: center;
`;

const Logo = styled.img`
  width: 160px;
  height: 70px;
  object-fit: contain;
  margin: 0 10px;
  padding-top: 10px;
`;

const Navigation = styled.div`
  display: flex;
  flex: 1;
`;









