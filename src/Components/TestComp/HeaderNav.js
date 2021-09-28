import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {AiOutlineHome,  AiOutlineSetting, AiOutlineFlag} from 'react-icons/ai';
const HeaderNav = () => {
    return (
        <Container>
            <Wrapper>
                <Logo/>
                <NavLink>
                    <MyLink to = '/'><AiOutlineHome/></MyLink>
                    <MyLink to = '/ProjectRace'><AiOutlineSetting/></MyLink>
                    <MyLink to = '/about'><AiOutlineFlag/></MyLink>
                    <MyLink to = '/work'>
                
                    </MyLink>
                </NavLink>
            </Wrapper>
        </Container>
    )
}

export default HeaderNav;

const Logo = styled.img`
width: 300px;
height: 50px;
background-color: green;
`;
const MyLink = styled(Link)`
width: 60px;
height: 40px;
color: black;
display: flex;
align-items: center;
justify-content: center;
background-color: rgb(0,0,0,0.1);
margin: 0 10px;
border-radius: 15px;
transition: all 350ms;

:hover{
    background-color: teal;
    cursor: pointer;
}

`;
const NavLink = styled.div`
display: flex;
`;

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
background-color: brown;
`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
background-color: ;
display: flex;
align-items: center;
justify-content: space-between;
`;