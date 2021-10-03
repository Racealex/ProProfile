import React from 'react'
import styled from 'styled-components';

const ServiceSection = () => {
    return(
        <Container>
            <Wrapper>
                <Card>
                    <Image/>
                    <Content>
                        <Title>Title</Title>
                        <Desc>Description</Desc>
                    </Content>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default ServiceSection;

const Image = styled.img`
width: 100%;
height: 50%;
background-color: red;
object-fit: cover;
border-radius: 5px 5px 0 0 ;
`;
const Content = styled.div`
color: black;
`;
const Title = styled.div`
margin: 10px;
font-size: 25px;
font-weight: bold;
text-align: center;
text-transform: uppercase;

`;
const Desc = styled.div`
text-align: center;
margin: 0 5px;
`;
const Card= styled.div`
width: 300px;
height: 500px;
background-color: white;
margin: 10px;
border: 3px solid lightgrey;
border-radius: 5px;
transition: all 400ms;
transform: scale(1);

:hover{
    transform: scale(1.03);
    border: 3px solid black;
}
`;
const Container = styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
background-color: green;
color: white;

`;
const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`;