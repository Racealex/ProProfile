import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const HeaderNav = () => {
    return (
        <Container>
            <Wrapper>
                <Logo />
                <Navigation>
                    <Nav to="/">Home</Nav>                   
                    <Nav to="/workhome">WorkHome</Nav>
                    <Nav to="/homescreen">Homescreen</Nav>
                    <Nav to="/gamescreen">GameScreen</Nav>
                </Navigation>
            </Wrapper>
        </Container>
    )
}

export default HeaderNav
const Logo = styled.img`
width:200px;
height:50px;
background:blue;

`
const Wrapper = styled.div`
display: flex;
align-items: center;
width:100%;
height:80px;
margin:0px 10px;
object-fit:contain;
justify-content: space-between;
`
const Navigation = styled.div`
display:flex;
margin:0px 10px
`
const Nav = styled(Link)`
margin:0 10px
`
const Container = styled.div`
width:100%;
height:80px;
background:red;
display:flex;
align-items:cenetr
`


