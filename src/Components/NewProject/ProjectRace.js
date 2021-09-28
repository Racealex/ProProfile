import React from 'react'
import styled from 'styled-components';
import img from "./sitemileimg.png";
import GlobalButton from './GlobalButton'
import {Link} from 'react-router-dom';


const ProjectRace = () => {
    return (
       <Container> 
           <Wrapper>
            <ContainerBox>
                <Title>
                  {" "}  
                Best WP Project Bidding Theme – Freelance Marketplace 2021
                </Title>
                <Content> The most complete freelancer marketplace theme in the world. 
                    Build your freelancer website with the best template. 
                    Finest written code and awesome customer support! {" "}
                    </Content>
                    <Sub> 
                      {" "}
                    Strating from {" "}
                    <span>
                      {" "}
                      <p>$</p>149</span>{" "}
                    <GlobalButton name= 'see pricing' rg1 rg2/>
                    </Sub>
                <Button>
                    <GlobalButton name= 'View Demo' />
                    <GlobalButton name= 'Purchase Theme' />
                </Button>
            </ContainerBox>
            <Image src ={img}/>
           </Wrapper>
       </Container>
    );
};

export default ProjectRace;



const Button= styled.div`
display: flex;
`;
const Title = styled.h2`
color: white;
`;
const Sub = styled.div`
display: flex;
margin: 5px 0;
align-items: center;

  span {
    margin-left:5px;
    color:lightgreen;
    font-weight: bold;
    display: flex;
    p {
      margin: 0;
      font-size: 10px;
    }
  }
`;
const ContainerBox = styled.div`
background-color:;
width: 400px;
height: 500px;
min-width: 320px;
margin-left: auto;
color: white;
margin: 5px;
`;
const Content = styled.div`
`;
const Image = styled.img`
min-width: 320px;
width: 400px;
height: 500px;
object-fit: contain;
background-color: ;
margin-left: auto;
margin: 5px;
`;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-image: url("sitemile.jpeg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
padding: 100px;
`;