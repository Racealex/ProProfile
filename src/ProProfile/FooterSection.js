import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {AiOutlineInstagram} from 'react-icons/ai';
import img from './logoimg.jpg';

const FooterSection = () => {
    return (
       <Container>
           <Wrapper>
               <Section>
                   <Title>Community</Title>
                   <Sub>
                       <List>Project</List>
                       <List>Project</List>
                       <List>Project</List>
                       <List>Project</List>
                   </Sub>
               </Section>
               <Section>
                   <Title>Community</Title>
                   <Sub>
                       <List>Project</List>
                       <List>Project</List>
                       <List>Project</List>
                       <List>Project</List>
                   </Sub>
               </Section>
               <Section>
                   <Title>Community</Title>
                   <Sub>
                       <List>Project</List>
                       <List>Project</List>
                       <List>Project</List>
                       <List>Project</List>
                   </Sub>
               </Section>
           </Wrapper>
           <Last>
                   <Image src={img}/>
                   <Text>This Platform Is Developed By RaceAlex</Text>
                   <Social>
                       <SocialIcon><FacebookIcon/></SocialIcon>
                       <SocialIcon><TwitterIcon/></SocialIcon>
                       <SocialIcon>
                           <span><AiOutlineInstagram/></span>
                       </SocialIcon>
                   </Social>
               </Last>
       </Container>
    )
}

export default FooterSection;

const Image= styled.img`
width: 100px;
height: 40px;
background-color: red;
margin: 20px;
object-fit: cover;
`;
const Last = styled.div`
width: 100%;
height: 80px;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;

`;
const Section = styled.div`
width: 300px;
height: 400px;
display: flex;
flex-direction: column;
`;
const Text = styled.div`
color: black;
font-family: Poppins;
font-size: 15px;
font-weight: bold;
`;
const SocialIcon = styled.div`
font-weight: bold;


.MuiSvgIcon-root{
    color: blue;
    font-size: 40px;;
}

span{
    color: red;
    font-size: 40px;
}
`;
const Social= styled.div`
width: 200px;
height: 40px;
object-fit: contain;
margin: 20px;
display: flex;
justify-content: space-between;
align-items: center;


`;
const Sub= styled.div``;
const List = styled.div`

`;
const Title = styled.div`
margin-left: 30px;
margin-bottom: 30px;
font-weight: bold;
font-size: 25px;
padding-top: 30px
`;
const Container = styled.div`
width: 100%;
height: 100%;
min-height: 70vh;
background-color: #1A1A1A
padding-top: 20px;
`;
const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: 1;

`;