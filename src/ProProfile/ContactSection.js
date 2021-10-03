import React from 'react'
import styled from 'styled-components';
const ContactSection = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Subscribe To Our NewsLetter</Title>
                <Holder>
                    <Input placeholder= 'Enter Your Email'/>
                    <Button>Submit</Button>
                </Holder>
            </Wrapper>
        </Container>
    )
}

export default ContactSection;


const Title = styled.div`
font-weight: bold;
font-size: 30px;
margin-bottom: 20px;
`;
const Holder = styled.div`
width: 500px;
height: 50px;
background-color: white;
border-radius: 40px;
display: flex;
align-items: center;


`;
const Input= styled.input`
border: 0;
outline: none;
flex: 3;
border-radius: 40px;
margin-left: 5px;
padding-left: 10px;
color: black;
font-size: 20px;
`;
const Button= styled.button`
color: black;
background-color: transparent;
border: 0;
flex: 1;
outline: none;
border-radius: 40px;
margin-left: 20px;
font-size: 20px;
cursor: pointer;
`;
const Container = styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
background-color: #feafa3

`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
flex-direction: column;
display: flex;
justify-content: center;
`;